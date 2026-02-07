"use client";

import { useState, useMemo } from "react";
import { RepoCard } from "@/components/RepoCard";
import { FilterPanel } from "@/components/FilterPanel";
import { SearchBar } from "@/components/SearchBar";
import type { AggregatedData } from "@/lib/types";
import reposData from "../../../data/repos.json";

const data = reposData as AggregatedData;

// Compute audience stats
const audienceStats: Record<string, number> = {};
data.repos.forEach((repo) => {
  const audiences = Array.isArray(repo.audience)
    ? repo.audience
    : repo.audience
      ? [repo.audience]
      : [];
  audiences.forEach((a) => {
    audienceStats[a] = (audienceStats[a] || 0) + 1;
  });
});

// Sort audiences by count descending
const sortedAudiences = Object.entries(audienceStats)
  .sort((a, b) => b[1] - a[1])
  .map(([name]) => name);

// Compute component stats
const componentStats: Record<string, number> = {};
data.repos.forEach((repo) => {
  repo.components?.forEach((c) => {
    componentStats[c] = (componentStats[c] || 0) + 1;
  });
});
const sortedComponents = Object.entries(componentStats)
  .filter(([, count]) => count >= 3)
  .sort((a, b) => b[1] - a[1])
  .map(([name]) => name);

// Compute auth method stats
const authMethodStats: Record<string, number> = {};
data.repos.forEach((repo) => {
  repo.auth?.methods?.forEach((m) => {
    if (m !== "none") authMethodStats[m] = (authMethodStats[m] || 0) + 1;
  });
});
const sortedAuthMethods = Object.entries(authMethodStats)
  .sort((a, b) => b[1] - a[1])
  .map(([name]) => name);

type SortOption = "lastActivity" | "stars" | "name";

export default function ReposPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOrgs, setSelectedOrgs] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [selectedAudiences, setSelectedAudiences] = useState<string[]>([]);
  const [selectedComponents, setSelectedComponents] = useState<string[]>([]);
  const [selectedAuthMethods, setSelectedAuthMethods] = useState<string[]>([]);
  const [hasDocsOnly, setHasDocsOnly] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption>("lastActivity");
  const [page, setPage] = useState(1);
  const perPage = 24;

  const filteredRepos = useMemo(() => {
    let repos = data.repos;

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      repos = repos.filter(
        (repo) =>
          repo.name.toLowerCase().includes(query) ||
          repo.description?.toLowerCase().includes(query) ||
          repo.tags?.some((tag) => tag.toLowerCase().includes(query)) ||
          repo.features?.some((f) => f.toLowerCase().includes(query)) ||
          repo.components?.some((c) => c.toLowerCase().includes(query)),
      );
    }

    if (selectedOrgs.length > 0) {
      repos = repos.filter((repo) => selectedOrgs.includes(repo.organization));
    }

    if (selectedLanguages.length > 0) {
      repos = repos.filter(
        (repo) => repo.language && selectedLanguages.includes(repo.language),
      );
    }

    if (selectedAudiences.length > 0) {
      repos = repos.filter((repo) => {
        const audiences = Array.isArray(repo.audience)
          ? repo.audience
          : repo.audience
            ? [repo.audience]
            : [];
        return audiences.some((a) => selectedAudiences.includes(a));
      });
    }

    if (selectedComponents.length > 0) {
      repos = repos.filter((repo) =>
        selectedComponents.some((c) => repo.components?.includes(c)),
      );
    }

    if (selectedAuthMethods.length > 0) {
      repos = repos.filter((repo) =>
        selectedAuthMethods.some((m) => repo.auth?.methods?.includes(m)),
      );
    }

    if (hasDocsOnly) {
      repos = repos.filter((repo) => repo.hasDocumentation);
    }

    repos = [...repos].sort((a, b) => {
      switch (sortBy) {
        case "stars":
          return (b.metrics?.stars || 0) - (a.metrics?.stars || 0);
        case "name":
          return a.name.localeCompare(b.name);
        case "lastActivity":
        default:
          return (
            new Date(b.lastActivity).getTime() -
            new Date(a.lastActivity).getTime()
          );
      }
    });

    return repos;
  }, [searchQuery, selectedOrgs, selectedLanguages, selectedAudiences, selectedComponents, selectedAuthMethods, hasDocsOnly, sortBy]);

  const paginatedRepos = filteredRepos.slice(0, page * perPage);
  const hasMore = paginatedRepos.length < filteredRepos.length;

  const hasActiveFilters =
    selectedOrgs.length > 0 ||
    selectedLanguages.length > 0 ||
    selectedAudiences.length > 0 ||
    selectedComponents.length > 0 ||
    selectedAuthMethods.length > 0 ||
    hasDocsOnly;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
          French Public Repositories
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Explore {data.stats.total.toLocaleString()} open source repositories
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <aside className="lg:w-72 shrink-0">
          <div className="lg:sticky lg:top-24">
            <FilterPanel
              organizations={data.organizations}
              languages={data.languages}
              audiences={sortedAudiences}
              components={sortedComponents}
              authMethods={sortedAuthMethods}
              selectedOrgs={selectedOrgs}
              selectedLanguages={selectedLanguages}
              selectedAudiences={selectedAudiences}
              selectedComponents={selectedComponents}
              selectedAuthMethods={selectedAuthMethods}
              hasDocsOnly={hasDocsOnly}
              onOrgChange={setSelectedOrgs}
              onLanguageChange={setSelectedLanguages}
              onAudienceChange={setSelectedAudiences}
              onComponentChange={setSelectedComponents}
              onAuthMethodChange={setSelectedAuthMethods}
              onHasDocsChange={setHasDocsOnly}
              stats={{
                ...data.stats,
                byAudience: audienceStats,
                byComponent: componentStats,
                byAuthMethod: authMethodStats,
              }}
            />
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0">
          {/* Search and sort */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-1">
              <SearchBar
                value={searchQuery}
                onChange={setSearchQuery}
                onSearch={setSearchQuery}
              />
            </div>
            <div className="sm:w-48">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="select"
              >
                <option value="lastActivity">Recent activity</option>
                <option value="stars">Most stars</option>
                <option value="name">Name (A-Z)</option>
              </select>
            </div>
          </div>

          {/* Results count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-slate-600">
              <span className="font-semibold text-slate-900">
                {filteredRepos.length.toLocaleString()}
              </span>{" "}
              repositories
              {selectedOrgs.length > 0 && (
                <span className="text-slate-500">
                  {" "}
                  in {selectedOrgs.join(", ")}
                </span>
              )}
            </p>
            {hasActiveFilters && (
              <button
                onClick={() => {
                  setSelectedOrgs([]);
                  setSelectedLanguages([]);
                  setSelectedAudiences([]);
                  setSelectedComponents([]);
                  setSelectedAuthMethods([]);
                  setHasDocsOnly(false);
                }}
                className="text-sm text-primary-600 hover:text-primary-700 font-medium"
              >
                Clear filters
              </button>
            )}
          </div>

          {/* Repo grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {paginatedRepos.map((repo) => (
              <RepoCard key={`${repo.organization}/${repo.name}`} repo={repo} />
            ))}
          </div>

          {/* Empty state */}
          {filteredRepos.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-slate-400"
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
              <h3 className="text-lg font-medium text-slate-900 mb-1">
                No repositories found
              </h3>
              <p className="text-slate-500">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}

          {/* Load more */}
          {hasMore && (
            <div className="text-center mt-8">
              <button
                onClick={() => setPage((p) => p + 1)}
                className="btn-secondary"
              >
                Load more ({filteredRepos.length - paginatedRepos.length}{" "}
                remaining)
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
