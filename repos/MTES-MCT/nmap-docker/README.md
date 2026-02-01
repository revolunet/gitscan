# nmap-docker

Docker container with nmap and xsltproc

## Build

```shell
docker build -t tristanrobert/nmap-docker:latest .
```

## Usage

```shell
docker run -v "$(pwd)"/data/:/data tristanrobert/nmap-docker:latest myfilename myhost.test true
# myfilename: name of the report file
# myhost.test: host to scan
# true: scan open ports with vulnerabilities, false: without vulnerabilities
```
