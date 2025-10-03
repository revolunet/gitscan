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
            return float(result.stdout.strip())
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
    orga_path = os.path.join(repos_folder, orga)
    if os.path.isdir(orga_path):
        orga_repos_path = os.path.join(orga_path, "repos.txt")
        if os.path.isfile(orga_repos_path):
            repos = open(orga_repos_path).readlines()
            for line in repos:
                if line.strip():
                    urls.append(line.strip())


# Sort URLs based on existence and modification time
sorted_urls = sorted(
    urls,
    key=lambda url: (
        os.path.exists(get_repo_local_path(url)),
        get_git_last_modified(get_repo_local_path(url)),
    ),
)

# Take only the first N URLs (from input)
matrix_count = int(sys.argv[1])
matrix_urls = sorted_urls[:matrix_count]

# Output the matrix JSON to GITHUB_OUTPUT
urls_json = json.dumps(
    [{"url": url, "full_name": get_repo_path(url)} for url in matrix_urls]
)

print(urls_json)
