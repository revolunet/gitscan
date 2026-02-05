import Link from "next/link";
import type { AggregatedData } from "@/lib/types";
import { Changelog } from "@/components/Changelog";
import { RepoCard } from "@/components/RepoCard";
import reposData from "../../../../../data/repos.json";

const data = reposData as AggregatedData;

const orgChangelogs = data.orgChangelogs ?? [];

interface PageProps {
  params: Promise<{ org: string }>;
}

export default async function OrgActivityPage({ params }: PageProps) {
  const { org } = await params;

  const entry = orgChangelogs.find((e) => e.organization === org);

  if (!entry) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-slate-900 mb-2">
          Organisation introuvable
        </h1>
        <p className="text-slate-600 mb-6">
          Pas de changelog disponible pour {org}.
        </p>
        <Link href="/activity" className="btn-primary inline-block">
          Retour à l&apos;activité
        </Link>
      </div>
    );
  }

  const repoCount = data.stats.byOrg[org] ?? 0;
  const orgRepos = data.repos.filter((r) => r.organization === org);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
        <Link href="/" className="hover:text-slate-900 transition-colors">
          Accueil
        </Link>
        <span>/</span>
        <Link
          href="/activity"
          className="hover:text-slate-900 transition-colors"
        >
          Activité
        </Link>
        <span>/</span>
        <span className="text-slate-900 font-medium">{org}</span>
      </nav>

      {/* Header */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">
              {org}
            </h1>
            <p className="text-slate-500">{repoCount} dépôts</p>
          </div>
          <a
            href={`https://github.com/${org}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 shrink-0"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            GitHub
          </a>
        </div>
      </div>

      {/* Changelog */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8">
        <Changelog content={entry.changelog} />
      </div>

      {/* Repos */}
      {orgRepos.length > 0 && (
        <div className="mb-8 mt-4">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">
            Dépôts ({orgRepos.length})
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {orgRepos.map((repo) => (
              <RepoCard key={repo.name} repo={repo} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function generateStaticParams() {
  return orgChangelogs.map((entry) => ({
    org: entry.organization,
  }));
}
