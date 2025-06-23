#!/bin/bash

mkdir -p /results

echo "Installing required package"
apt update && apt install -y bind9-dnsutils

declare -a commands=(
  "dig @1.1.1.1 puginarug.com +trace > /results/01_trace.txt"
  "dig @1.1.1.1 a.root-servers.net > /results/02_root.txt"
  "dig @198.41.0.4 puginarug.com > /results/03_root_ip.txt"
  "dig @l.gtld-servers.net puginarug.com > /results/04_gtld.txt"
  "dig @dns1.p02.nsone.net puginarug.com > /results/05_authoritative.txt"
  "nslookup -type=NS com. a.root-servers.net > /results/06_ns_com.txt"
  "nslookup -type=NS puginarug.com l.gtld-servers.net > /results/07_ns_puginarug.txt"
  "nslookup -type=A puginarug.com dns1.p02.nsone.net > /results/08_a_puginarug.txt"
)

delay=1

for cmd in "${commands[@]}"; do
  echo "Executing: $cmd"
  bash -c "$cmd"
  sleep $delay
done

echo "All commands executed. Results are saved in the '/results' directory."
