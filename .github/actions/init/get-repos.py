import os
import json
import sys
import subprocess
from urllib.parse import urlparse
import re


# get list of repos to analyze based on GIT history based on orgas.txt

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
        print(f"error running git log for {path}")
        print(e)
        return float("-inf")  # Error running git command


urls = []

orgas = [
    orga.strip() for orga in open(os.path.join("./orgas.txt")).readlines() if len(orga)
]


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


# Sort URLs: non-existing repos first, then by oldest modification time
def get_sort_key(url):
    local_path = get_repo_local_path(url)
    exists = os.path.exists(local_path)
    if not exists:
        # Non-existing repos get highest priority (sorted first)
        return (0, float("-inf"))
    else:
        # Existing repos sorted by modification time (oldest first)
        return (1, get_git_last_modified(local_path))


sorted_urls = sorted(urls, key=get_sort_key)

# Take only the first N URLs (from input)
matrix_count = int(sys.argv[1])
matrix_urls = sorted_urls[:matrix_count]

# Output the matrix JSON to GITHUB_OUTPUT
urls_json = json.dumps(
    [{"url": url, "full_name": get_repo_path(url)} for url in matrix_urls]
)

print(urls_json)
