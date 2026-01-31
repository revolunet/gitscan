#!/usr/bin/env python3
"""
minitree - Filter tree output by grouping similar files with patterns.

When a directory contains many files with similar names (e.g., region_*.yml),
this tool groups them into a single pattern line to reduce output verbosity.
"""

import sys
import re
from collections import defaultdict
from typing import Iterator


def get_indent_level(line: str) -> tuple[str, str]:
    """Extract the tree prefix (│ ├── etc.) and the filename."""
    # Match tree characters and extract filename
    match = re.match(r"^(.*?(?:├──|└──)\s*)", line)
    if match:
        prefix = match.group(1)
        filename = line[len(prefix) :]
        return prefix, filename.strip()
    return "", line.strip()


def find_pattern(filenames: list[str], min_group_size: int = 5) -> dict[str, list[str]]:
    """
    Find common patterns in filenames.
    Returns a dict mapping pattern -> list of matching filenames.
    """
    patterns = defaultdict(list)

    for filename in filenames:
        # Try to find a pattern by looking for common prefixes/suffixes
        # Split on common separators
        base, ext = split_extension(filename)

        # Try different pattern strategies
        # 1. Prefix pattern: word_* or word-*
        prefix_match = re.match(r"^([a-zA-Z]+[-_])", base)
        if prefix_match:
            pattern = f"{prefix_match.group(1)}*{ext}"
            patterns[pattern].append(filename)
            continue

        # 2. Numeric suffix pattern: name123 -> name*
        numeric_match = re.match(r"^(.+?)(\d+)$", base)
        if numeric_match:
            pattern = f"{numeric_match.group(1)}*{ext}"
            patterns[pattern].append(filename)
            continue

        # No pattern found, keep as-is
        patterns[filename].append(filename)

    # Filter patterns that don't have enough matches
    result = {}
    for pattern, files in patterns.items():
        if len(files) >= min_group_size:
            result[pattern] = files
        else:
            # Keep individual files
            for f in files:
                result[f] = [f]

    return result


def split_extension(filename: str) -> tuple[str, str]:
    """Split filename into base and extension."""
    if "." in filename:
        parts = filename.rsplit(".", 1)
        return parts[0], "." + parts[1]
    return filename, ""


def group_by_directory(
    lines: list[str],
) -> Iterator[tuple[str | None, list[tuple[int, str, str]]]]:
    """
    Group consecutive lines that are in the same directory level.
    Yields (prefix_pattern, [(line_index, prefix, filename), ...])
    """
    current_group = []
    current_prefix_pattern = None

    for i, line in enumerate(lines):
        if not line.strip():
            if current_group:
                yield current_prefix_pattern, current_group
                current_group = []
                current_prefix_pattern = None
            continue

        prefix, filename = get_indent_level(line)

        if not prefix:
            # Not a tree line, flush and pass through
            if current_group:
                yield current_prefix_pattern, current_group
                current_group = []
                current_prefix_pattern = None
            yield None, [(i, "", line)]
            continue

        # Normalize prefix for comparison (├── and └── are same level)
        normalized_prefix = prefix.replace("└──", "├──")

        if current_prefix_pattern is None:
            current_prefix_pattern = normalized_prefix
            current_group = [(i, prefix, filename)]
        elif normalized_prefix == current_prefix_pattern:
            current_group.append((i, prefix, filename))
        else:
            yield current_prefix_pattern, current_group
            current_prefix_pattern = normalized_prefix
            current_group = [(i, prefix, filename)]

    if current_group:
        yield current_prefix_pattern, current_group


def filter_tree(input_text: str, threshold: int = 50, min_group_size: int = 5) -> str:
    """
    Filter tree output by grouping similar files.

    Args:
        input_text: The tree command output
        threshold: Minimum number of files in a directory to trigger grouping
        min_group_size: Minimum number of similar files to create a pattern

    Returns:
        Filtered tree output
    """
    lines = input_text.split("\n")
    result_lines = []

    for prefix_pattern, group in group_by_directory(lines):
        if prefix_pattern is None:
            # Non-tree line, pass through
            for _, _, content in group:
                result_lines.append(content)
            continue

        if len(group) < threshold:
            # Below threshold, keep all lines
            for _, prefix, filename in group:
                result_lines.append(f"{prefix}{filename}")
            continue

        # Above threshold, find patterns
        filenames = [filename for _, _, filename in group]
        patterns = find_pattern(filenames, min_group_size)

        # Build output: use first occurrence's prefix for patterns
        seen_patterns = set()
        prefix_map = {filename: prefix for _, prefix, filename in group}
        first_prefix = group[0][1]
        last_prefix = group[-1][1]

        # Get the order of patterns by first occurrence
        pattern_order = []
        filename_to_pattern = {}
        for pattern, files in patterns.items():
            for f in files:
                filename_to_pattern[f] = pattern

        for _, prefix, filename in group:
            pattern = filename_to_pattern.get(filename, filename)
            if pattern not in seen_patterns:
                seen_patterns.add(pattern)
                pattern_order.append(
                    (pattern, prefix, patterns.get(pattern, [filename]))
                )

        # Output patterns
        for i, (pattern, prefix, files) in enumerate(pattern_order):
            if len(files) > 1:
                # Use appropriate prefix (last item uses └──)
                if i == len(pattern_order) - 1:
                    prefix = last_prefix
                result_lines.append(f"{prefix}{pattern}  ({len(files)} files)")
            else:
                if i == len(pattern_order) - 1:
                    prefix = last_prefix
                result_lines.append(f"{prefix}{pattern}")

    return "\n".join(result_lines)


def main():
    import argparse

    parser = argparse.ArgumentParser(
        description="Filter tree output by grouping similar files with patterns."
    )
    parser.add_argument(
        "-t",
        "--threshold",
        type=int,
        default=50,
        help="Minimum files in directory to trigger grouping (default: 50)",
    )
    parser.add_argument(
        "-g",
        "--min-group",
        type=int,
        default=5,
        help="Minimum similar files to create a pattern (default: 5)",
    )
    parser.add_argument("file", nargs="?", help="Input file (default: stdin)")

    args = parser.parse_args()

    if args.file:
        with open(args.file, "r") as f:
            input_text = f.read()
    else:
        input_text = sys.stdin.read()

    output = filter_tree(input_text, args.threshold, args.min_group)
    print(output)


if __name__ == "__main__":
    main()
