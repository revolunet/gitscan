# Prometheus exporter for Grist doc workers

**Status: ✅ Ready to be used in production**

This simple service allows exporting data from doc workers as a prometheus metrics endpoint.
It is meant to run as a sidecar container.

In its first version, it is used to track pod cgroup memory max and usage, and doc memory and cpu usage.

## Setup

Using `mise`:

- [install `mise`](https://mise.jdx.dev/getting-started.html)
- run `mise i`
- run `uv sync`
- run `uv run main.py`
