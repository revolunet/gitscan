"use client";

import { useMemo, useState } from "react";
import type { ContributionData, DayContribution } from "@/lib/types";

interface ContributionGraphProps {
  data: ContributionData;
  compact?: boolean;
}

interface DayCell {
  date: string;
  dayOfWeek: number;
  weekIndex: number;
  contribution: DayContribution | null;
}

interface TooltipState {
  cell: DayCell;
  x: number;
  y: number;
}

function getIntensityClass(commits: number, maxCommits: number): string {
  if (commits === 0) return "bg-slate-100";
  const ratio = commits / maxCommits;
  if (ratio < 0.25) return "bg-green-200";
  if (ratio < 0.5) return "bg-green-400";
  if (ratio < 0.75) return "bg-green-500";
  return "bg-green-600";
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("fr-FR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function ContributionGraph({ data, compact = false }: ContributionGraphProps) {
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);

  const cellSize = compact ? 8 : 12;
  const gap = compact ? 2 : 3;

  const { grid, weeks, maxCommits } = useMemo(() => {
    const contributionMap = new Map<string, DayContribution>();
    let max = 0;

    for (const c of data.contributions) {
      contributionMap.set(c.date, c);
      if (c.commits > max) max = c.commits;
    }

    // Build grid from start to end date
    const startDate = new Date(data.stats.dateRange.start);
    const endDate = new Date(data.stats.dateRange.end);

    // Adjust start to beginning of week (Sunday)
    const adjustedStart = new Date(startDate);
    adjustedStart.setDate(adjustedStart.getDate() - adjustedStart.getDay());

    const cells: DayCell[] = [];
    const current = new Date(adjustedStart);
    let weekIndex = 0;

    while (current <= endDate) {
      const dateStr = current.toISOString().split("T")[0];
      const dayOfWeek = current.getDay();

      if (dayOfWeek === 0 && cells.length > 0) {
        weekIndex++;
      }

      cells.push({
        date: dateStr,
        dayOfWeek,
        weekIndex,
        contribution: contributionMap.get(dateStr) || null,
      });

      current.setDate(current.getDate() + 1);
    }

    return {
      grid: cells,
      weeks: weekIndex + 1,
      maxCommits: max,
    };
  }, [data]);

  const dayLabels = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];

  if (compact) {
    return (
      <>
        <div className="overflow-x-auto">
          <div
            className="grid"
            style={{
              gridTemplateColumns: `repeat(${weeks}, ${cellSize}px)`,
              gridTemplateRows: `repeat(7, ${cellSize}px)`,
              gap: `${gap}px`,
            }}
          >
            {grid.map((cell) => {
              const commits = cell.contribution?.commits || 0;
              const intensityClass = getIntensityClass(commits, maxCommits);

              return (
                <div
                  key={cell.date}
                  className={`rounded-sm ${intensityClass}`}
                  style={{
                    width: cellSize,
                    height: cellSize,
                    gridColumn: cell.weekIndex + 1,
                    gridRow: cell.dayOfWeek + 1,
                  }}
                  onMouseEnter={(e) => {
                    setTooltip({
                      cell,
                      x: e.clientX,
                      y: e.clientY,
                    });
                  }}
                  onMouseLeave={() => setTooltip(null)}
                />
              );
            })}
          </div>
        </div>

        {/* Tooltip */}
        {tooltip && (
          <div
            className="fixed z-50 p-2 bg-slate-800 text-white rounded-lg text-xs shadow-lg pointer-events-none"
            style={{
              left: tooltip.x,
              top: tooltip.y - 60,
              transform: "translateX(-50%)",
            }}
          >
            <div className="font-medium whitespace-nowrap">
              {formatDate(tooltip.cell.date)}
            </div>
            {tooltip.cell.contribution ? (
              <div className="text-slate-300 mt-0.5 whitespace-nowrap">
                {tooltip.cell.contribution.commits} commit
                {tooltip.cell.contribution.commits > 1 ? "s" : ""} dans{" "}
                {tooltip.cell.contribution.repos} depot
                {tooltip.cell.contribution.repos > 1 ? "s" : ""}
              </div>
            ) : (
              <div className="text-slate-400 mt-0.5">Aucune activite</div>
            )}
          </div>
        )}
      </>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-slate-900">
          Activite des contributions
        </h3>
        <div className="text-sm text-slate-500">
          {data.stats.totalCommits.toLocaleString()} commits dans{" "}
          {data.stats.totalRepos.toLocaleString()} depots
        </div>
      </div>

      {/* Graph container */}
      <div className="overflow-x-auto">
        <div className="inline-flex gap-1">
          {/* Day labels */}
          <div className="flex flex-col pr-2" style={{ gap: `${gap}px` }}>
            {dayLabels.map((label, i) => (
              <div
                key={label}
                className="text-[10px] text-slate-400"
                style={{ height: cellSize, lineHeight: `${cellSize}px` }}
              >
                {i % 2 === 1 ? label : ""}
              </div>
            ))}
          </div>

          {/* Grid */}
          <div
            className="grid"
            style={{
              gridTemplateColumns: `repeat(${weeks}, ${cellSize}px)`,
              gridTemplateRows: `repeat(7, ${cellSize}px)`,
              gap: `${gap}px`,
            }}
          >
            {grid.map((cell) => {
              const commits = cell.contribution?.commits || 0;
              const intensityClass = getIntensityClass(commits, maxCommits);

              return (
                <div
                  key={cell.date}
                  className={`rounded-sm ${intensityClass} cursor-pointer transition-all hover:ring-2 hover:ring-slate-400 hover:ring-offset-1`}
                  style={{
                    width: cellSize,
                    height: cellSize,
                    gridColumn: cell.weekIndex + 1,
                    gridRow: cell.dayOfWeek + 1,
                  }}
                  onMouseEnter={(e) => {
                    setTooltip({
                      cell,
                      x: e.clientX,
                      y: e.clientY,
                    });
                  }}
                  onMouseLeave={() => setTooltip(null)}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Tooltip - using fixed positioning to escape overflow container */}
      {tooltip && (
        <div
          className="fixed z-50 p-2 bg-slate-800 text-white rounded-lg text-xs shadow-lg pointer-events-none"
          style={{
            left: tooltip.x,
            top: tooltip.y - 60,
            transform: "translateX(-50%)",
          }}
        >
          <div className="font-medium whitespace-nowrap">
            {formatDate(tooltip.cell.date)}
          </div>
          {tooltip.cell.contribution ? (
            <div className="text-slate-300 mt-0.5 whitespace-nowrap">
              {tooltip.cell.contribution.commits} commit
              {tooltip.cell.contribution.commits > 1 ? "s" : ""} dans{" "}
              {tooltip.cell.contribution.repos} depot
              {tooltip.cell.contribution.repos > 1 ? "s" : ""}
            </div>
          ) : (
            <div className="text-slate-400 mt-0.5">Aucune activite</div>
          )}
        </div>
      )}

      {/* Legend */}
      <div className="flex items-center justify-end gap-2 mt-4 text-xs text-slate-500">
        <span>Moins</span>
        <div className="flex" style={{ gap: `${gap}px` }}>
          <div className="rounded-sm bg-slate-100" style={{ width: cellSize, height: cellSize }} />
          <div className="rounded-sm bg-green-200" style={{ width: cellSize, height: cellSize }} />
          <div className="rounded-sm bg-green-400" style={{ width: cellSize, height: cellSize }} />
          <div className="rounded-sm bg-green-500" style={{ width: cellSize, height: cellSize }} />
          <div className="rounded-sm bg-green-600" style={{ width: cellSize, height: cellSize }} />
        </div>
        <span>Plus</span>
      </div>
    </div>
  );
}
