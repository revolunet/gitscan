import Link from "next/link";
import type { AggregatedData } from "@/lib/types";
import reposData from "../../../data/repos.json";

const data = reposData as AggregatedData;

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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {orgChangelogs.map((entry) => (
          <Link
            key={entry.organization}
            href={`/activity/org/${entry.organization}`}
            className="bg-white rounded-xl border border-slate-200 p-6 hover:border-primary-300 hover:shadow-md transition-all"
          >
            <h2 className="text-lg font-semibold text-slate-900 mb-2">
              {entry.organization}
            </h2>
            <span className="badge badge-slate text-xs">
              {data.stats.byOrg[entry.organization] ?? 0} dépôts
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
