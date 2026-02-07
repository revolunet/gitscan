"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { DependencyIndex, DependencyType } from "@/lib/types";
import { parseVersionFilter, matchesVersionRange } from "@/lib/semver";
import depsData from "../../../data/dependencies.json";

const data = depsData as DependencyIndex;

const typeLabels: Record<DependencyType, string> = {
  npm: "NPM",
  "npm-dev": "NPM (dev)",
  pypi: "PyPI",
  "pypi-dev": "PyPI (dev)",
  docker: "Docker",
};

const typeColors: Record<DependencyType, string> = {
  npm: "bg-red-100 text-red-800",
  "npm-dev": "bg-red-50 text-red-600",
  pypi: "bg-blue-100 text-blue-800",
  "pypi-dev": "bg-blue-50 text-blue-600",
  docker: "bg-purple-100 text-purple-800",
};

type SortOption = "usages" | "name";

export default function DependenciesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [versionFilter, setVersionFilter] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<DependencyType[]>([]);
  const [sortBy, setSortBy] = useState<SortOption>("usages");
  const [page, setPage] = useState(1);
  const [expandedDep, setExpandedDep] = useState<string | null>(null);
  const perPage = 50;

  const filteredDeps = useMemo(() => {
    let deps = Object.values(data.dependencies);

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      deps = deps.filter((dep) => dep.name.toLowerCase().includes(query));
    }

    // Filter by selected types
    if (selectedTypes.length > 0) {
      deps = deps.filter((dep) =>
        dep.usages.some((u) => selectedTypes.includes(u.type)),
      );
    }

    // Filter by version
    if (versionFilter) {
      const parsed = parseVersionFilter(versionFilter);
      if (parsed) {
        deps = deps.filter((dep) =>
          dep.usages.some((u) =>
            matchesVersionRange(u.version, parsed.operator, parsed.version),
          ),
        );
      }
    }

    // Sort
    deps = [...deps].sort((a, b) => {
      if (sortBy === "usages") {
        return b.usages.length - a.usages.length;
      }
      return a.name.localeCompare(b.name);
    });

    return deps;
  }, [searchQuery, versionFilter, selectedTypes, sortBy]);

  const paginatedDeps = filteredDeps.slice(0, page * perPage);
  const hasMore = paginatedDeps.length < filteredDeps.length;

  const toggleType = (type: DependencyType) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type],
    );
    setPage(1);
  };

  const getFilteredUsages = (depName: string) => {
    const dep = data.dependencies[depName];
    if (!dep) return [];

    let usages = dep.usages;

    if (selectedTypes.length > 0) {
      usages = usages.filter((u) => selectedTypes.includes(u.type));
    }

    if (versionFilter) {
      const parsed = parseVersionFilter(versionFilter);
      if (parsed) {
        usages = usages.filter((u) =>
          matchesVersionRange(u.version, parsed.operator, parsed.version),
        );
      }
    }

    return usages;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
          <Link href="/" className="hover:text-primary-600">
            Accueil
          </Link>
          <span>/</span>
          <span>Dépendances</span>
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Recherche</h1>
        <p className="text-slate-600">
          Cherchez {data.stats.totalDependencies.toLocaleString()} parmi{" "}
          dépendances utilisées dans {data.stats.totalUsages.toLocaleString()}{" "}
          projets
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-8">
        {(Object.keys(typeLabels) as DependencyType[]).map((type) => (
          <button
            key={type}
            onClick={() => toggleType(type)}
            className={`p-4 rounded-lg border transition-all ${
              selectedTypes.includes(type)
                ? "border-primary-500 bg-primary-50"
                : "border-slate-200 bg-white hover:border-slate-300"
            }`}
          >
            <div className="text-2xl font-bold text-slate-900">
              {data.stats.byType[type].toLocaleString()}
            </div>
            <div className="text-sm text-slate-500">{typeLabels[type]}</div>
          </button>
        ))}
      </div>

      {/* Search and filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search dependencies (e.g., react, django, postgres)..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setPage(1);
            }}
            className="input w-full"
          />
        </div>
        <div className="sm:w-48">
          <input
            type="text"
            placeholder="Version filter (e.g., >=1.0.0)"
            value={versionFilter}
            onChange={(e) => {
              setVersionFilter(e.target.value);
              setPage(1);
            }}
            className="input w-full"
            title="Supports: =, >, >=, <, <=, ^, ~ operators"
          />
        </div>
        <div className="sm:w-40">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="select w-full"
          >
            <option value="usages">Most used</option>
            <option value="name">Name (A-Z)</option>
          </select>
        </div>
      </div>

      {/* Active filters */}
      {(selectedTypes.length > 0 || versionFilter) && (
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="text-sm text-slate-500">Filters:</span>
          {selectedTypes.map((type) => (
            <button
              key={type}
              onClick={() => toggleType(type)}
              className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-sm bg-primary-100 text-primary-800 hover:bg-primary-200"
            >
              {typeLabels[type]}
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          ))}
          {versionFilter && (
            <button
              onClick={() => setVersionFilter("")}
              className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-sm bg-amber-100 text-amber-800 hover:bg-amber-200"
            >
              Version: {versionFilter}
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
          <button
            onClick={() => {
              setSelectedTypes([]);
              setVersionFilter("");
            }}
            className="text-sm text-slate-500 hover:text-slate-700 underline"
          >
            Clear all
          </button>
        </div>
      )}

      {/* Results count */}
      <div className="mb-4">
        <p className="text-sm text-slate-600">
          <span className="font-semibold text-slate-900">
            {filteredDeps.length.toLocaleString()}
          </span>{" "}
          dépendances trouvées
        </p>
      </div>

      {/* Dependencies list */}
      <div className="space-y-2">
        {paginatedDeps.map((dep) => {
          const filteredUsages = getFilteredUsages(dep.name);
          const isExpanded = expandedDep === dep.name;
          const uniqueTypes = [
            ...new Set(filteredUsages.map((u) => u.type)),
          ] as DependencyType[];

          return (
            <div
              key={dep.name}
              className="bg-white border border-slate-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setExpandedDep(isExpanded ? null : dep.name)}
                className="w-full px-4 py-3 flex items-center justify-between hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono font-medium text-slate-900">
                    {dep.name}
                  </span>
                  <div className="flex gap-1">
                    {uniqueTypes.map((type) => (
                      <span
                        key={type}
                        className={`px-2 py-0.5 rounded-full text-xs font-medium ${typeColors[type]}`}
                      >
                        {typeLabels[type]}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-slate-500">
                    {filteredUsages.length} repo
                    {filteredUsages.length !== 1 ? "s" : ""}
                  </span>
                  <svg
                    className={`w-5 h-5 text-slate-400 transition-transform ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              {isExpanded && (
                <div className="border-t border-slate-200 bg-slate-50 px-4 py-3">
                  <div className="grid gap-2 max-h-80 overflow-y-auto">
                    {filteredUsages.map((usage, idx) => (
                      <div
                        key={`${usage.organization}-${usage.repo}-${usage.type}-${idx}`}
                        className="flex items-center justify-between py-1"
                      >
                        <Link
                          href={`/repos/${usage.organization}/${usage.repo}`}
                          className="text-sm text-primary-600 hover:text-primary-800 hover:underline"
                        >
                          {usage.organization}/{usage.repo}
                        </Link>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs text-slate-600 bg-slate-200 px-2 py-0.5 rounded">
                            {usage.version}
                          </span>
                          <span
                            className={`px-2 py-0.5 rounded-full text-xs font-medium ${typeColors[usage.type]}`}
                          >
                            {typeLabels[usage.type]}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Empty state */}
      {filteredDeps.length === 0 && (
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
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-slate-900 mb-1">
            No dependencies found
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
            Load more ({filteredDeps.length - paginatedDeps.length} remaining)
          </button>
        </div>
      )}
    </div>
  );
}
