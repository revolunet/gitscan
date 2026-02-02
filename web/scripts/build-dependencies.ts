import { glob } from "glob";
import * as fs from "fs";
import * as path from "path";
import type {
  DependencyIndex,
  Dependency,
  DependencyType,
  DependencyUsage,
} from "../src/lib/types";

const reposDir = path.resolve(__dirname, "../../repos");
const outputPath = path.resolve(__dirname, "../data/dependencies.json");

interface ParsedDep {
  name: string;
  version: string;
}

function parseNpmVersion(version: string): string {
  // Clean npm version strings (^1.0.0, ~1.0.0, >=1.0.0, etc.)
  return version.replace(/^[\^~>=<]+/, "").trim();
}

function parsePythonVersion(spec: string): ParsedDep | null {
  // Handle various Python version formats:
  // package==1.0.0, package>=1.0.0, package~=1.0.0, package[extras]>=1.0.0
  const match = spec.match(/^([a-zA-Z0-9_-]+)(?:\[.*?\])?(?:[<>=~!]+)?(.*)$/);
  if (match) {
    const name = match[1].toLowerCase();
    let version = match[2] || "*";
    // Clean up version (remove hashes, comments, etc.)
    version = version.split(/[\s\\#]/)[0].trim();
    if (version.startsWith("=")) {
      version = version.replace(/^=+/, "");
    }
    return { name, version: version || "*" };
  }
  return null;
}

function parseDockerImage(image: string): ParsedDep {
  // Parse docker image format: image:tag or registry/image:tag
  const parts = image.split(":");
  const name = parts[0];
  const version = parts[1] || "latest";
  return { name, version };
}

async function parsePackageJson(
  filePath: string,
  org: string,
  repoName: string,
): Promise<DependencyUsage[]> {
  const usages: DependencyUsage[] = [];
  try {
    const content = fs.readFileSync(filePath, "utf-8");
    const pkg = JSON.parse(content);

    if (pkg.dependencies) {
      for (const [name, version] of Object.entries(pkg.dependencies)) {
        usages.push({
          organization: org,
          repo: repoName,
          version: parseNpmVersion(version as string),
          type: "npm",
        });
        // Store the dependency name in the usage for later aggregation
        (
          usages[usages.length - 1] as DependencyUsage & { _name: string }
        )._name = name;
      }
    }

    if (pkg.devDependencies) {
      for (const [name, version] of Object.entries(pkg.devDependencies)) {
        usages.push({
          organization: org,
          repo: repoName,
          version: parseNpmVersion(version as string),
          type: "npm-dev",
        });
        (
          usages[usages.length - 1] as DependencyUsage & { _name: string }
        )._name = name;
      }
    }
  } catch (error) {
    console.error(`Error parsing ${filePath}:`, error);
  }
  return usages;
}

async function parseRequirementsTxt(
  filePath: string,
  org: string,
  repoName: string,
): Promise<DependencyUsage[]> {
  const usages: DependencyUsage[] = [];
  try {
    const content = fs.readFileSync(filePath, "utf-8");
    const lines = content.split("\n");

    for (const line of lines) {
      const trimmed = line.trim();
      // Skip comments, empty lines, -r includes, and hash lines
      if (
        !trimmed ||
        trimmed.startsWith("#") ||
        trimmed.startsWith("-r") ||
        trimmed.startsWith("-e") ||
        trimmed.startsWith("--")
      ) {
        continue;
      }

      const parsed = parsePythonVersion(trimmed);
      if (parsed) {
        usages.push({
          organization: org,
          repo: repoName,
          version: parsed.version,
          type: "pypi",
        });
        (
          usages[usages.length - 1] as DependencyUsage & { _name: string }
        )._name = parsed.name;
      }
    }
  } catch (error) {
    console.error(`Error parsing ${filePath}:`, error);
  }
  return usages;
}

async function parsePyprojectToml(
  filePath: string,
  org: string,
  repoName: string,
): Promise<DependencyUsage[]> {
  const usages: DependencyUsage[] = [];
  try {
    const content = fs.readFileSync(filePath, "utf-8");

    // Simple TOML parsing for dependencies array
    // Look for dependencies = [...] in [project] section
    const depMatch = content.match(
      /\[project\][\s\S]*?dependencies\s*=\s*\[([\s\S]*?)\]/,
    );
    if (depMatch) {
      const depsStr = depMatch[1];
      const deps = depsStr.match(/"([^"]+)"/g) || [];

      for (const dep of deps) {
        const depStr = dep.replace(/"/g, "");
        const parsed = parsePythonVersion(depStr);
        if (parsed) {
          usages.push({
            organization: org,
            repo: repoName,
            version: parsed.version,
            type: "pypi",
          });
          (
            usages[usages.length - 1] as DependencyUsage & { _name: string }
          )._name = parsed.name;
        }
      }
    }

    // Look for dev dependencies in [dependency-groups] or [tool.poetry.dev-dependencies]
    const devMatch = content.match(
      /\[(?:dependency-groups|tool\.poetry\.dev-dependencies)\][\s\S]*?(?:dev\s*=\s*\[)?([\s\S]*?)(?:\]|\[)/,
    );
    if (devMatch) {
      const depsStr = devMatch[1];
      const deps = depsStr.match(/"([^"]+)"/g) || [];

      for (const dep of deps) {
        const depStr = dep.replace(/"/g, "");
        const parsed = parsePythonVersion(depStr);
        if (parsed) {
          usages.push({
            organization: org,
            repo: repoName,
            version: parsed.version,
            type: "pypi-dev",
          });
          (
            usages[usages.length - 1] as DependencyUsage & { _name: string }
          )._name = parsed.name;
        }
      }
    }
  } catch (error) {
    console.error(`Error parsing ${filePath}:`, error);
  }
  return usages;
}

async function parseComposeYml(
  filePath: string,
  org: string,
  repoName: string,
): Promise<DependencyUsage[]> {
  const usages: DependencyUsage[] = [];
  try {
    const content = fs.readFileSync(filePath, "utf-8");

    // Simple regex to find image: declarations
    const imageMatches = content.matchAll(
      /^\s*image:\s*['"]?([^'"\s\n]+)['"]?/gm,
    );

    for (const match of imageMatches) {
      const imageStr = match[1];
      // Skip local build images (contain variable substitutions or are clearly local)
      if (
        imageStr.includes("${") ||
        imageStr.includes("$") ||
        (!imageStr.includes(":") && !imageStr.includes("/"))
      ) {
        // Still include if it looks like a standard image name
        if (imageStr.match(/^[a-z][a-z0-9-]+$/)) {
          const parsed = parseDockerImage(imageStr);
          usages.push({
            organization: org,
            repo: repoName,
            version: parsed.version,
            type: "docker",
          });
          (
            usages[usages.length - 1] as DependencyUsage & { _name: string }
          )._name = parsed.name;
        }
        continue;
      }

      const parsed = parseDockerImage(imageStr);
      usages.push({
        organization: org,
        repo: repoName,
        version: parsed.version,
        type: "docker",
      });
      (usages[usages.length - 1] as DependencyUsage & { _name: string })._name =
        parsed.name;
    }
  } catch (error) {
    console.error(`Error parsing ${filePath}:`, error);
  }
  return usages;
}

async function buildDependencyIndex() {
  console.log("Building dependency index...");

  const dependencies: Record<string, Dependency> = {};
  const byType: Record<DependencyType, number> = {
    npm: 0,
    "npm-dev": 0,
    pypi: 0,
    "pypi-dev": 0,
    docker: 0,
  };
  let totalUsages = 0;

  // Find all dependency files
  const patterns = [
    "**/*package.json",
    "**/*requirements.txt",
    "**/*pyproject.toml",
    "**/*compose.yml",
  ];

  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: reposDir });
    console.log(`Found ${files.length} files matching ${pattern}`);

    for (const file of files) {
      const filePath = path.join(reposDir, file);
      const pathParts = file.split("/");

      if (pathParts.length < 2) continue;

      const org = pathParts[0];
      const repoName = pathParts[1];

      let usages: (DependencyUsage & { _name?: string })[] = [];

      if (file.endsWith("package.json")) {
        usages = await parsePackageJson(filePath, org, repoName);
      } else if (file.endsWith("requirements.txt")) {
        usages = await parseRequirementsTxt(filePath, org, repoName);
      } else if (file.endsWith("pyproject.toml")) {
        usages = await parsePyprojectToml(filePath, org, repoName);
      } else if (file.endsWith("compose.yml")) {
        usages = await parseComposeYml(filePath, org, repoName);
      }

      for (const usage of usages) {
        const name = usage._name;
        if (!name) continue;

        delete usage._name;

        if (!dependencies[name]) {
          dependencies[name] = {
            name,
            usages: [],
          };
        }

        // Avoid duplicate entries for same repo/type/version
        const exists = dependencies[name].usages.some(
          (u) =>
            u.organization === usage.organization &&
            u.repo === usage.repo &&
            u.type === usage.type &&
            u.version === usage.version,
        );

        if (!exists) {
          dependencies[name].usages.push(usage);
          byType[usage.type]++;
          totalUsages++;
        }
      }
    }
  }

  // Sort dependencies by usage count
  const sortedDeps = Object.fromEntries(
    Object.entries(dependencies).sort(
      ([, a], [, b]) => b.usages.length - a.usages.length,
    ),
  );

  const index: DependencyIndex = {
    dependencies: sortedDeps,
    stats: {
      totalDependencies: Object.keys(dependencies).length,
      totalUsages,
      byType,
    },
  };

  fs.writeFileSync(outputPath, JSON.stringify(index, null, 2));
  console.log(`Generated ${outputPath}`);
  console.log(`Total dependencies: ${index.stats.totalDependencies}`);
  console.log(`Total usages: ${index.stats.totalUsages}`);
  console.log(`By type:`, index.stats.byType);
}

buildDependencyIndex().catch(console.error);
