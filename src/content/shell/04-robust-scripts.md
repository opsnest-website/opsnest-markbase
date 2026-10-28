---
id: robust-scripts
subject: shell
order: 4
title: Processes, traps and robust errors
description: Handle signals, cleanup, failures and safe dry runs.
difficulty: Advanced
quiz:
  question: What is a common use for a trap on EXIT?
  options:
    - Cleanup temporary resources
    - Install system packages automatically
    - Disable file permissions
  answer: 0
---
## Cleanup with a trap

```bash
#!/usr/bin/env bash
set -u
tmp_file=$(mktemp)
cleanup() { rm -f -- "$tmp_file"; }
trap cleanup EXIT
printf 'temporary data\n' > "$tmp_file"
cat "$tmp_file"
```

Traps allow cleanup when a shell exits or receives supported signals. `set -e` has exceptions and context-dependent behavior, so do not treat it as a complete error-handling strategy. Check critical commands explicitly.

> Test cleanup scripts in a temporary directory. Avoid destructive commands against real paths until inputs, safeguards and dry-run output are verified.

## Practice challenge

Add a dry-run mode to a script that proposes file deletions without deleting anything.
