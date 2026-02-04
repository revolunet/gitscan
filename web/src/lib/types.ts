export interface RepoMetrics {
  stars: number | null;
  forks: number | null;
  contributors: number | null;
  openIssues: number | null;
}

export interface RepoAuth {
  methods: string[];
  providers?: string[];
}

export interface Repository {
  url: string;
  name: string;
  description: string;
  language: string | null;
  features: string[] | null;
  audience: string | string[];
  dependencies: string[] | null;
  components: string[] | null;
  auth: RepoAuth | null;
  tests: string[] | null;
  workflows: string[] | null;
  lastActivity: string;
  status: string;
  license: string | null;
  hasDocumentation: boolean;
  metrics: RepoMetrics | null;
  tags: string[] | null;
  changelog: string | null;
  // Added during aggregation
  organization: string;
}

export interface AggregatedData {
  repos: Repository[];
  organizations: string[];
  languages: string[];
  licenses: string[];
  tags: string[];
  stats: {
    total: number;
    byOrg: Record<string, number>;
    byLanguage: Record<string, number>;
  };
}

export type DependencyType =
  | "npm"
  | "npm-dev"
  | "pypi"
  | "pypi-dev"
  | "docker";

export interface DependencyUsage {
  organization: string;
  repo: string;
  version: string;
  type: DependencyType;
}

export interface Dependency {
  name: string;
  usages: DependencyUsage[];
}

export interface DependencyIndex {
  dependencies: Record<string, Dependency>;
  stats: {
    totalDependencies: number;
    totalUsages: number;
    byType: Record<DependencyType, number>;
  };
}
