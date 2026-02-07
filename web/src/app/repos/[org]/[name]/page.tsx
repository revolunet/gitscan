import Link from "next/link";
import type { AggregatedData } from "@/lib/types";
import { Changelog } from "@/components/Changelog";
import reposData from "../../../../../data/repos.json";

const data = reposData as AggregatedData;

function formatRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
  return `${Math.floor(diffDays / 365)} years ago`;
}

const languageColors: Record<string, string> = {
  TypeScript: "bg-blue-500",
  JavaScript: "bg-yellow-400",
  Python: "bg-green-500",
  Ruby: "bg-red-500",
  Go: "bg-cyan-500",
  Rust: "bg-orange-500",
  Java: "bg-orange-600",
  PHP: "bg-indigo-500",
  Shell: "bg-emerald-500",
  default: "bg-slate-400",
};

interface PageProps {
  params: Promise<{ org: string; name: string }>;
}

export default async function RepoDetailPage({ params }: PageProps) {
  const { org, name } = await params;

  const repo = data.repos.find(
    (r) => r.organization === org && r.name === name,
  );

  if (!repo) {
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
          Repository not found
        </h1>
        <p className="text-slate-600 mb-6">
          The repository {org}/{name} doesn&apos;t exist.
        </p>
        <Link href="/" className="btn-primary inline-block">
          Back to home
        </Link>
      </div>
    );
  }

  const audience = Array.isArray(repo.audience)
    ? repo.audience.join(", ")
    : repo.audience;
  const langColor =
    languageColors[repo.language || ""] || languageColors.default;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
        <Link href="/" className="hover:text-slate-900 transition-colors">
          Home
        </Link>
        <span>/</span>
        <span className="text-slate-900 font-medium">
          <Link
            href={`/activity/org/${org}`}
            className="hover:text-slate-900 transition-colors"
          >
            {org}
          </Link>
        </span>
        <span>/</span>
        <span className="text-slate-900 font-medium">{name}</span>
      </nav>

      {/* Header */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
                {repo.name}
              </h1>
              <span
                className={`badge ${
                  repo.status === "active" ? "badge-green" : "badge-amber"
                }`}
              >
                {repo.status}
              </span>
            </div>
            <p className="text-slate-500">
              <Link
                href={`/activity/org/${org}`}
                className="hover:text-slate-900 transition-colors"
              >
                {repo.organization}
              </Link>
            </p>
          </div>
          <a
            href={repo.url}
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
            View on GitHub
          </a>
        </div>

        <p className="text-lg text-slate-700 mb-6">{repo.description}</p>

        {/* Badges */}
        <div className="flex flex-wrap gap-2">
          {repo.language && (
            <div className="flex items-center gap-1.5 badge badge-slate">
              <span className={`w-2 h-2 rounded-full ${langColor}`} />
              {repo.language}
            </div>
          )}
          {repo.license && (
            <span className="badge badge-green">{repo.license}</span>
          )}
          {repo.hasDocumentation && (
            <span className="badge badge-blue">Documentation</span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Features */}
          {repo.features && repo.features.length > 0 && (
            <section className="bg-white rounded-xl border border-slate-200 p-6">
              <h2 className="text-lg font-semibold text-slate-900 mb-4">
                Features
              </h2>
              <ul className="space-y-2">
                {repo.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-700">
                    <svg
                      className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Tech Stack */}
          {(repo.dependencies || repo.components) && (
            <section className="bg-white rounded-xl border border-slate-200 p-6">
              <h2 className="text-lg font-semibold text-slate-900 mb-4">
                Tech Stack
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {repo.dependencies && repo.dependencies.length > 0 && (
                  <div>
                    <h3 className="text-sm font-medium text-slate-500 mb-3">
                      Dependencies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {repo.dependencies.map((dep, i) => (
                        <span key={i} className="badge badge-blue">
                          {dep}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {repo.components && repo.components.length > 0 && (
                  <div>
                    <h3 className="text-sm font-medium text-slate-500 mb-3">
                      Components
                    </h3>
                    <ul className="space-y-1.5 text-sm text-slate-700">
                      {repo.components.map((comp, i) => (
                        <li key={i}>{comp}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Tags */}
          {repo.tags && repo.tags.length > 0 && (
            <section className="bg-white rounded-xl border border-slate-200 p-6">
              <h2 className="text-lg font-semibold text-slate-900 mb-4">
                Tags
              </h2>
              <div className="flex flex-wrap gap-2">
                {repo.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/?q=${encodeURIComponent(tag)}`}
                    className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-sm transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Changelog */}
          {repo.changelog && (
            <section className="bg-white rounded-xl border border-slate-200 p-6">
              <h2 className="text-lg font-semibold text-slate-900 mb-4">
                Changelog
              </h2>
              <Changelog content={repo.changelog} />
            </section>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Metrics */}
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Metrics
            </h3>
            <dl className="space-y-4">
              <div className="flex items-center justify-between">
                <dt className="flex items-center gap-2 text-slate-600">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Stars
                </dt>
                <dd className="font-semibold text-slate-900">
                  {repo.metrics?.stars ?? "N/A"}
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="flex items-center gap-2 text-slate-600">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Forks
                </dt>
                <dd className="font-semibold text-slate-900">
                  {repo.metrics?.forks ?? "N/A"}
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="flex items-center gap-2 text-slate-600">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Open Issues
                </dt>
                <dd className="font-semibold text-slate-900">
                  {repo.metrics?.openIssues ?? "N/A"}
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="flex items-center gap-2 text-slate-600">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Last Activity
                </dt>
                <dd className="font-semibold text-slate-900">
                  {formatRelativeTime(repo.lastActivity)}
                </dd>
              </div>
            </dl>
          </div>

          {/* Info */}
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Information
            </h3>
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="text-slate-500 mb-1">Target Audience</dt>
                <dd className="text-slate-900">
                  {audience || "Not specified"}
                </dd>
              </div>
              {repo.auth?.methods && (
                <div>
                  <dt className="text-slate-500 mb-1">Authentication</dt>
                  <dd className="text-slate-900">
                    {repo.auth.methods.join(", ")}
                  </dd>
                </div>
              )}
              {repo.tests &&
                repo.tests.length > 0 &&
                Array.isArray(repo.tests) && (
                  <div>
                    <dt className="text-slate-500 mb-1">Testing</dt>
                    <dd className="text-slate-900">{repo.tests.join(", ")}</dd>
                  </div>
                )}
              {repo.workflows && repo.workflows.length > 0 && (
                <div>
                  <dt className="text-slate-500 mb-1">CI/CD</dt>
                  <dd className="text-slate-900">
                    {repo.workflows.join(", ")}
                  </dd>
                </div>
              )}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return data.repos.map((repo) => ({
    org: repo.organization,
    name: repo.name,
  }));
}
