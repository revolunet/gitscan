// Simple semver utilities for version filtering

export interface SemverParts {
  major: number;
  minor: number;
  patch: number;
  prerelease: string;
}

export function parseSemver(version: string): SemverParts | null {
  // Handle various version formats
  const cleaned = version.replace(/^[v=]/, "").trim();

  // Match semver pattern: major.minor.patch(-prerelease)?
  const match = cleaned.match(
    /^(\d+)(?:\.(\d+))?(?:\.(\d+))?(?:[-.]?(.+))?$/
  );

  if (!match) return null;

  return {
    major: parseInt(match[1], 10) || 0,
    minor: parseInt(match[2], 10) || 0,
    patch: parseInt(match[3], 10) || 0,
    prerelease: match[4] || "",
  };
}

export function compareSemver(a: string, b: string): number {
  const parsedA = parseSemver(a);
  const parsedB = parseSemver(b);

  if (!parsedA && !parsedB) return 0;
  if (!parsedA) return -1;
  if (!parsedB) return 1;

  if (parsedA.major !== parsedB.major) {
    return parsedA.major - parsedB.major;
  }
  if (parsedA.minor !== parsedB.minor) {
    return parsedA.minor - parsedB.minor;
  }
  if (parsedA.patch !== parsedB.patch) {
    return parsedA.patch - parsedB.patch;
  }

  // Versions with prerelease come before those without
  if (parsedA.prerelease && !parsedB.prerelease) return -1;
  if (!parsedA.prerelease && parsedB.prerelease) return 1;

  return parsedA.prerelease.localeCompare(parsedB.prerelease);
}

export type SemverOperator = "=" | ">" | ">=" | "<" | "<=" | "^" | "~";

export function matchesVersionRange(
  version: string,
  operator: SemverOperator,
  target: string
): boolean {
  const parsedVersion = parseSemver(version);
  const parsedTarget = parseSemver(target);

  if (!parsedVersion || !parsedTarget) {
    // Fallback to string comparison for non-semver versions
    switch (operator) {
      case "=":
        return version === target;
      case ">":
        return version > target;
      case ">=":
        return version >= target;
      case "<":
        return version < target;
      case "<=":
        return version <= target;
      default:
        return version.startsWith(target);
    }
  }

  const cmp = compareSemver(version, target);

  switch (operator) {
    case "=":
      return cmp === 0;
    case ">":
      return cmp > 0;
    case ">=":
      return cmp >= 0;
    case "<":
      return cmp < 0;
    case "<=":
      return cmp <= 0;
    case "^":
      // Compatible with major version (for major >= 1)
      // For 0.x, compatible with minor version
      if (parsedTarget.major === 0) {
        return (
          parsedVersion.major === parsedTarget.major &&
          parsedVersion.minor === parsedTarget.minor &&
          cmp >= 0
        );
      }
      return parsedVersion.major === parsedTarget.major && cmp >= 0;
    case "~":
      // Compatible with minor version
      return (
        parsedVersion.major === parsedTarget.major &&
        parsedVersion.minor === parsedTarget.minor &&
        cmp >= 0
      );
    default:
      return true;
  }
}

export function parseVersionFilter(
  filter: string
): { operator: SemverOperator; version: string } | null {
  const match = filter.match(/^([><=^~]+)?(.+)$/);
  if (!match) return null;

  const operator = (match[1] || "=") as SemverOperator;
  const version = match[2].trim();

  // Validate operator
  if (!["=", ">", ">=", "<", "<=", "^", "~"].includes(operator)) {
    return { operator: "=", version: filter };
  }

  return { operator, version };
}
