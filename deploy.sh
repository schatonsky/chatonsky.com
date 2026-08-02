#!/usr/bin/env bash
# Headless deploy for chatonsky.com.
# Vercel is already wired to auto-build on push to `main`, so "deploy" = git push.
# This script just wraps that in one non-interactive command.
#
# Usage:
#   ./deploy.sh "commit message"
#
# Credentials: if .secrets/github_token exists (gitignored, never committed),
# it's used to set the push URL for this run. Otherwise falls back to
# whatever credential helper / cached auth is already configured for origin.

set -euo pipefail
cd "$(dirname "$0")"

if [ -f .secrets/github_token ]; then
  TOKEN="$(cat .secrets/github_token)"
  git remote set-url origin "https://x-access-token:${TOKEN}@github.com/schatonsky/chatonsky.com.git"
fi

git add -A

if git diff --cached --quiet; then
  echo "No changes to commit."
else
  git commit -m "${1:-Update site}"
fi

git push origin main
echo "Pushed to main — Vercel will auto-deploy within ~30s."
