import { glob } from "glob";
import * as fs from "fs";
import * as path from "path";
import type {
  ContributionData,
  DayContribution,
  ContributionsByOrg,
} from "../src/lib/types";

interface CommitsByDay {
  [date: string]: {
    commits: number;
    repos: Set<string>;
  };
}

function parseCommitDate(line: string): string | null {
  // Format: 2026-01-30T15:41:20+01:00 - d6cb779 - author : message
  const match = line.match(/^(\d{4}-\d{2}-\d{2})T/);
  return match ? match[1] : null;
}

function buildContributionData(
  commitsByDay: CommitsByDay,
  allRepos: Set<string>,
  totalCommits: number,
  org: string | null,
): ContributionData {
  const contributions: DayContribution[] = Object.entries(commitsByDay)
    .map(([date, data]) => ({
      date,
      commits: data.commits,
      repos: data.repos.size,
    }))
    .sort((a, b) => a.date.localeCompare(b.date));

  const dates = contributions.map((c) => c.date);
  const dateRange = {
    start: dates[0] || "",
    end: dates[dates.length - 1] || "",
  };

  return {
    contributions,
    organization: org,
    stats: {
      totalCommits,
      totalDays: contributions.length,
      totalRepos: allRepos.size,
      dateRange,
    },
  };
}

async function buildContributions(org?: string) {
  const reposDir = path.resolve(__dirname, "../../repos");
  const dataDir = path.resolve(__dirname, "../data");

  // Ensure data directory exists
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  const pattern = org ? `${org}/*/commits.txt` : "*/*/commits.txt";
  console.log(`Scanning for commits.txt files with pattern: ${pattern}`);

  const files = await glob(pattern, { cwd: reposDir });
  console.log(`Found ${files.length} commits.txt files`);

  // Global aggregation
  const globalCommitsByDay: CommitsByDay = {};
  const globalRepos = new Set<string>();
  let globalTotalCommits = 0;

  // Per-org aggregation
  const orgData: Record<
    string,
    { commitsByDay: CommitsByDay; repos: Set<string>; totalCommits: number }
  > = {};

  for (const file of files) {
    try {
      const filePath = path.join(reposDir, file);
      const content = fs.readFileSync(filePath, "utf-8");
      const lines = content.split("\n").filter((line) => line.trim());

      // Extract org and repo name from path (org/repo/commits.txt)
      const pathParts = file.split("/");
      const fileOrg = pathParts[0];
      const repoKey = `${fileOrg}/${pathParts[1]}`;

      globalRepos.add(repoKey);

      // Initialize org data if needed
      if (!orgData[fileOrg]) {
        orgData[fileOrg] = {
          commitsByDay: {},
          repos: new Set(),
          totalCommits: 0,
        };
      }
      orgData[fileOrg].repos.add(repoKey);

      for (const line of lines) {
        const date = parseCommitDate(line);
        if (date) {
          // Global aggregation
          if (!globalCommitsByDay[date]) {
            globalCommitsByDay[date] = { commits: 0, repos: new Set() };
          }
          globalCommitsByDay[date].commits++;
          globalCommitsByDay[date].repos.add(repoKey);
          globalTotalCommits++;

          // Per-org aggregation
          if (!orgData[fileOrg].commitsByDay[date]) {
            orgData[fileOrg].commitsByDay[date] = {
              commits: 0,
              repos: new Set(),
            };
          }
          orgData[fileOrg].commitsByDay[date].commits++;
          orgData[fileOrg].commitsByDay[date].repos.add(repoKey);
          orgData[fileOrg].totalCommits++;
        }
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error);
    }
  }

  // If no specific org, also generate per-org file
  if (!org) {
    const contributionsByOrg: ContributionsByOrg = {};

    for (const [orgName, data] of Object.entries(orgData)) {
      contributionsByOrg[orgName] = buildContributionData(
        data.commitsByDay,
        data.repos,
        data.totalCommits,
        orgName,
      );
    }

    const byOrgPath = path.join(dataDir, "contributions-by-org.json");
    fs.writeFileSync(byOrgPath, JSON.stringify(contributionsByOrg, null, 2));
    console.log(
      `Generated ${byOrgPath} with ${Object.keys(contributionsByOrg).length} organizations`,
    );
  }
}

async function buildAllContributions() {
  const reposDir = path.resolve(__dirname, "../../repos");

  // Get all org directories
  const entries = fs.readdirSync(reposDir, { withFileTypes: true });
  const orgs = entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);

  console.log(`Found ${orgs.length} organizations: ${orgs.join(", ")}`);

  for (const org of orgs) {
    console.log(`\nBuilding contributions for organization: ${org}`);
    await buildContributions(org);
  }

  console.log("\nDone building all contributions.");
}

buildAllContributions().catch(console.error);
