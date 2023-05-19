#!/bin/sh
find transcripts/ -type f -name "*.ht*" | xargs -n 1 node index
