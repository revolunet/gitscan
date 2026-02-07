"use client";

import { useMemo } from "react";
import Link from "next/link";
import { RepoCard } from "@/components/RepoCard";
import type { AggregatedData } from "@/lib/types";
import reposData from "../../data/repos.json";

const data = reposData as AggregatedData;

// Haikus inspirants pour les nerds en français
const haikus = [
  {
    lines: [
      "Quatre cent quatre",
      "La page s'est envolée",
      "Cherche ailleurs, ami",
    ],
  },
  {
    lines: [
      "Erreur dans le code",
      "Le chemin n'existe plus",
      "Mais l'espoir demeure",
    ],
  },
  {
    lines: [
      "Zéro et un dansent",
      "Cette URL s'est perdue",
      "Git push vers demain",
    ],
  },
  {
    lines: [
      "Page introuvable",
      "Comme un bug dans la nuit noire",
      "Debug ton chemin",
    ],
  },
  {
    lines: ["Terminal muet", "Le serveur ne répond plus", "Café, puis retry"],
  },
];

// Fisher-Yates shuffle to get random repos
function getRandomRepos(count: number) {
  const shuffled = [...data.repos];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
}

export default function NotFound() {
  const randomRepos = useMemo(() => getRandomRepos(10), []);
  const randomHaiku = useMemo(
    () => haikus[Math.floor(Math.random() * haikus.length)],
    [],
  );
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* 404 Header */}
      <div className="text-center mb-12">
        <div className="mb-6">
          <span className="text-8xl sm:text-9xl font-bold bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
            404
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
          Page introuvable
        </h1>

        {/* Haiku */}
        <div className="bg-slate-50 rounded-xl p-6 max-w-md mx-auto mb-8 border border-slate-200">
          <div className="text-slate-600 italic space-y-1">
            {randomHaiku.lines.map((line, index) => (
              <p key={index} className="text-lg">
                {line}
              </p>
            ))}
          </div>
          <div className="mt-4 text-xs text-slate-400">
            — Un développeur perdu
          </div>
        </div>

        <p className="text-slate-600 mb-6">
          La page que vous cherchez n&apos;existe pas ou a été déplacée.
        </p>

        <Link href="/" className="btn-primary">
          <svg
            className="w-4 h-4 mr-2 inline-block"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          Retour à l&apos;accueil
        </Link>
      </div>

      {/* Random Repos */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-slate-900">
            🎲 Peut-être que ces dépôts vous intéresseront ?
          </h2>
          <Link
            href="/repos"
            className="text-sm text-primary-600 hover:text-primary-700 font-medium"
          >
            Voir tous les dépôts
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {randomRepos.map((repo) => (
            <RepoCard key={`${repo.organization}/${repo.name}`} repo={repo} />
          ))}
        </div>
      </section>
    </div>
  );
}
