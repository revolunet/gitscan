import { glob } from "glob";
import * as fs from "fs";
import * as path from "path";
import type { Repository, AggregatedData, OrgChangelog } from "../src/lib/types";

async function buildIndex() {
  const reposDir = path.resolve(__dirname, "../../repos");
  const outputPath = path.resolve(__dirname, "../data/repos.json");

  console.log("Scanning for overview.json files...");

  const files = await glob("**/overview.json", { cwd: reposDir });
  console.log(`Found ${files.length} overview.json files`);

  const repos: Repository[] = [];
  const organizations = new Set<string>();
  const languages = new Set<string>();
  const licenses = new Set<string>();
  const allTags = new Set<string>();
  const byOrg: Record<string, number> = {};
  const byLanguage: Record<string, number> = {};

  for (const file of files) {
    try {
      const filePath = path.join(reposDir, file);
      const content = fs.readFileSync(filePath, "utf-8");

      if (!content.trim()) continue;

      const data = JSON.parse(content);

      // Extract organization from path (e.g., "betagouv/repo-name/overview.json")
      const pathParts = file.split("/");
      const organization = pathParts[0];

      // Read CHANGELOG-generated.md if it exists
      const changelogPath = path.join(path.dirname(filePath), "CHANGELOG-generated.md");
      const changelog = fs.existsSync(changelogPath)
        ? fs.readFileSync(changelogPath, "utf-8").trim() || null
        : null;

      const repo: Repository = {
        ...data,
        changelog,
        organization,
      };

      repos.push(repo);
      organizations.add(organization);

      if (repo.language) {
        languages.add(repo.language);
        byLanguage[repo.language] = (byLanguage[repo.language] || 0) + 1;
      }

      if (repo.license) {
        licenses.add(repo.license);
      }

      if (repo.tags) {
        repo.tags.forEach((tag) => allTags.add(tag));
      }

      byOrg[organization] = (byOrg[organization] || 0) + 1;
    } catch (error) {
      console.error(`Error processing ${file}:`, error);
    }
  }

  // Sort repos by lastActivity (most recent first)
  repos.sort(
    (a, b) =>
      new Date(b.lastActivity).getTime() - new Date(a.lastActivity).getTime()
  );

  // Read organization-level changelogs
  const orgChangelogs: OrgChangelog[] = [];
  for (const org of organizations) {
    const orgChangelogPath = path.join(reposDir, org, "CHANGELOG-generated.md");
    if (fs.existsSync(orgChangelogPath)) {
      const content = fs.readFileSync(orgChangelogPath, "utf-8").trim();
      if (content) {
        orgChangelogs.push({ organization: org, changelog: content });
      }
    }
  }
  orgChangelogs.sort((a, b) => a.organization.localeCompare(b.organization));

  const aggregatedData: AggregatedData = {
    repos,
    organizations: Array.from(organizations).sort(),
    languages: Array.from(languages).sort(),
    licenses: Array.from(licenses).sort(),
    tags: Array.from(allTags).sort(),
    orgChangelogs,
    stats: {
      total: repos.length,
      byOrg,
      byLanguage,
    },
  };

  fs.writeFileSync(outputPath, JSON.stringify(aggregatedData, null, 2));
  console.log(`Generated ${outputPath}`);
  console.log(`Total repos: ${repos.length}`);
  console.log(`Organizations: ${organizations.size}`);
  console.log(`Languages: ${languages.size}`);
}

buildIndex().catch(console.error);
