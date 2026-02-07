import Link from "next/link";
import { RepoCard } from "@/components/RepoCard";
import { ContributionGraph } from "@/components/ContributionGraph";
import type {
  AggregatedData,
  ContributionData,
  ContributionsByOrg,
} from "@/lib/types";
import reposData from "../../data/repos.json";
import contributionsByOrgData from "../../data/contributions-by-org.json";

const data = reposData as AggregatedData;
const contributionsByOrg = contributionsByOrgData as ContributionsByOrg;

const recentRepos = [...data.repos]
  .sort(
    (a, b) =>
      new Date(b.lastActivity).getTime() - new Date(a.lastActivity).getTime(),
  )
  .slice(0, 12);

const orgEntries = Object.entries(data.stats.byOrg).sort((a, b) => b[1] - a[1]);

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
          GitScan
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          {data.stats.total.toLocaleString()} depots open source dans{" "}
          {data.organizations.length} organisations
        </p>
        <div className="mt-6">
          <Link href="/repos" className="btn-primary">
            Explorer tous les depots
          </Link>
        </div>
      </div>

      {/* Organisations */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-900">Organisations</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {orgEntries.map(([org, count]) => {
            const orgContributions = contributionsByOrg[org];
            return (
              <Link
                key={org}
                href={`/org/${org}`}
                className="bg-white rounded-xl border border-slate-200 p-5 hover:border-primary-300 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-slate-900 mb-1 truncate">
                  {org}
                </h3>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-slate-500">
                    {count} depot{count > 1 ? "s" : ""}
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
      </section>

      {/* Derniers repos actifs */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-900">
            Derniers depots actifs
          </h2>
          <Link
            href="/repos"
            className="text-sm text-primary-600 hover:text-primary-700 font-medium"
          >
            Voir tous les depots
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {recentRepos.map((repo) => (
            <RepoCard key={`${repo.organization}/${repo.name}`} repo={repo} />
          ))}
        </div>
      </section>
    </div>
  );
}
