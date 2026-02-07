import os
import json
import sys
import subprocess
from urllib.parse import urlparse
from datetime import datetime, timezone
import re


# get list of repos to analyze based on GIT history based on orgas.txt
# prioritizes repos that have been updated on GitHub since last local analysis

repos_folder = os.path.abspath("./repos")


def get_git_last_modified(path):
    try:
        # Get the last commit date for the file
        result = subprocess.run(
            ["git", "log", "--format=%at", "--", path],
            capture_output=True,
            text=True,
        )
        if result.stdout.strip():
            return float(result.stdout.strip().split("\n")[0])
        return float("-inf")  # File doesn't exist in git history
    except Exception as e:
        print(f"error running git log for {path}", file=sys.stderr)
        print(e, file=sys.stderr)
        return float("-inf")  # Error running git command


def load_pushed_at_map(orgas):
    """Load pushed_at timestamps from repos.json files, keyed by clone_url."""
    pushed_at_map = {}
    for orga in orgas:
        repos_json_path = os.path.join(repos_folder, orga, "repos.json")
        if not os.path.isfile(repos_json_path):
            continue
        try:
            with open(repos_json_path) as f:
                repos_data = json.load(f)
            for repo in repos_data:
                clone_url = repo.get("clone_url")
                pushed_at = repo.get("pushed_at") or repo.get("updated_at")
                if clone_url and pushed_at:
                    # Parse ISO 8601 date to unix timestamp
                    dt = datetime.fromisoformat(pushed_at.replace("Z", "+00:00"))
                    pushed_at_map[clone_url] = dt.timestamp()
        except Exception as e:
            print(f"error loading {repos_json_path}: {e}", file=sys.stderr)
    return pushed_at_map


urls = []

orgas = [
    orga.strip() for orga in open(os.path.join("./orgas.txt")).readlines() if len(orga)
]

# Build mapping of clone_url -> pushed_at timestamp from GitHub API data
pushed_at_map = load_pushed_at_map(orgas)


def get_repo_path(url):
    parsed = urlparse(url)
    path = parsed.path.strip("/")
    path = re.sub(".git$", "", path)
    segments = [s for s in path.split("/") if s]  # Enlever les segments vides
    path = f"{segments[-2]}/{segments[-1]}"
    return path


def get_repo_local_path(url):
    return f"{repos_folder}/{get_repo_path(url)}"


for orga in orgas:
    repos_file = os.path.join(repos_folder, orga, "repos.txt")
    if os.path.isfile(repos_file):
        urls.extend(line.strip() for line in open(repos_file) if line.strip())


# Sort URLs: new repos first, then updated repos (oldest analysis first), then unchanged repos
def get_sort_key(url):
    local_path = get_repo_local_path(url)
    exists = os.path.exists(local_path)
    if not exists:
        # Non-existing repos get highest priority (sorted first)
        return (0, float("-inf"))

    last_local = get_git_last_modified(local_path)
    github_pushed_at = pushed_at_map.get(url, float("inf"))

    if github_pushed_at > last_local:
        # Repo has been updated since last analysis — needs re-scan
        return (1, last_local)
    else:
        # Repo unchanged since last analysis — lowest priority
        return (2, last_local)


sorted_urls = sorted(urls, key=get_sort_key)

# Take only the first N URLs (from input)
matrix_count = int(sys.argv[1])
matrix_urls = sorted_urls[:matrix_count]

# Log summary
new_count = sum(1 for u in urls if not os.path.exists(get_repo_local_path(u)))
updated_count = sum(
    1
    for u in urls
    if os.path.exists(get_repo_local_path(u))
    and pushed_at_map.get(u, float("inf")) > get_git_last_modified(get_repo_local_path(u))
)
unchanged_count = len(urls) - new_count - updated_count
print(
    f"Repos: {len(urls)} total, {new_count} new, {updated_count} updated, {unchanged_count} unchanged",
    file=sys.stderr,
)
selected_updated = sum(1 for u in matrix_urls if get_sort_key(u)[0] <= 1)
selected_backfill = sum(1 for u in matrix_urls if get_sort_key(u)[0] == 2)
print(
    f"Selected: {len(matrix_urls)} repos ({selected_updated} new/updated, {selected_backfill} backfill)",
    file=sys.stderr,
)

# Output the matrix JSON to GITHUB_OUTPUT
urls_json = json.dumps(
    [{"url": url, "full_name": get_repo_path(url)} for url in matrix_urls]
)

print(urls_json)
