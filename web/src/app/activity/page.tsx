import Link from "next/link";
import { ContributionGraph } from "@/components/ContributionGraph";
import type { AggregatedData, ContributionsByOrg } from "@/lib/types";
import reposData from "../../../data/repos.json";
import contributionsByOrgData from "../../../data/contributions-by-org.json";

const data = reposData as AggregatedData;
const contributionsByOrg = contributionsByOrgData as ContributionsByOrg;

const orgChangelogs = data.orgChangelogs ?? [];

export default function ActivityPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          Activité des organisations
        </h1>
        <p className="text-slate-600">
          Synthèse d&apos;activité pour {orgChangelogs.length} organisations
        </p>
      </div>

      {/* Org list */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {orgChangelogs.map((entry) => {
          const orgContributions = contributionsByOrg[entry.organization];
          const repoCount = data.stats.byOrg[entry.organization] ?? 0;
          return (
            <Link
              key={entry.organization}
              href={`/activity/org/${entry.organization}`}
              className="bg-white rounded-xl border border-slate-200 p-5 hover:border-primary-300 hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-slate-900 mb-1 truncate">
                {entry.organization}
              </h3>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-slate-500">
                  {repoCount} depot{repoCount > 1 ? "s" : ""}
                </span>
                {orgContributions && (
                  <span className="text-xs text-slate-400">
                    {orgContributions.stats.totalCommits.toLocaleString()}{" "}
                    commits
                  </span>
                )}
              </div>
              {orgContributions && (
                <ContributionGraph data={orgContributions} compact />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
