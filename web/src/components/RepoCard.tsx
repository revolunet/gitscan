"use client";

import Link from "next/link";
import type { Repository } from "@/lib/types";

function formatRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 7) return `${diffDays}d ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)}w ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)}mo ago`;
  return `${Math.floor(diffDays / 365)}y ago`;
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

interface RepoCardProps {
  repo: Repository;
}

export function RepoCard({ repo }: RepoCardProps) {
  const stars = repo.metrics?.stars;
  const forks = repo.metrics?.forks;
  const langColor =
    languageColors[repo.language || ""] || languageColors.default;

  return (
    <Link
      href={`/repos/${repo.organization}/${repo.name}`}
      className="card block p-5 h-full group"
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-slate-900 group-hover:text-primary-600 transition-colors truncate">
              {repo.name}
            </h3>
            <p className="text-xs text-slate-500">{repo.organization}</p>
          </div>
          {repo.language && (
            <div className="flex items-center gap-1.5 shrink-0">
              <span className={`w-2.5 h-2.5 rounded-full ${langColor}`} />
              <span className="text-xs text-slate-600">{repo.language}</span>
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-slate-600 line-clamp-2 mb-4 flex-1">
          {repo.description}
        </p>

        {/* Badges */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {repo.license && (
            <span className="badge badge-green">{repo.license}</span>
          )}
          {repo.hasDocumentation && (
            <span className="badge badge-blue">Docs</span>
          )}
        </div>

        {/* Tags */}
        {repo.tags && repo.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {repo.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 bg-slate-100 text-slate-600 rounded"
              >
                {tag}
              </span>
            ))}
            {repo.tags.length > 3 && (
              <span className="text-xs px-2 py-0.5 bg-slate-100 text-slate-500 rounded">
                +{repo.tags.length - 3}
              </span>
            )}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center gap-4 text-xs text-slate-500 pt-3 border-t border-slate-100">
          {stars !== null && stars !== undefined && (
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>{stars}</span>
            </div>
          )}
          {forks !== null && forks !== undefined && (
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{forks}</span>
            </div>
          )}
          <div className="flex items-center gap-1 ml-auto">
            <svg
              className="w-4 h-4"
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
            <span>{formatRelativeTime(repo.lastActivity)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
