#!/bin/bash

# Usage: ./commit.sh "Your commit message"

if [ -z "$1" ]; then
  echo "Commit message is required"
  exit 1
fi

git add .
git commit -m "$1"
git push