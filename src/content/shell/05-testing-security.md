---
id: testing-security
subject: shell
title: Testing and security
description: Use ShellCheck, syntax checks, safe inputs and repeatable automation.
difficulty: Intermediate
quiz:
  question: Which command checks Bash syntax without running the script?
  options:
    - bash -n script.sh
    - rm -rf script.sh
    - bash --install
  answer: 0
---
## Useful checks

```bash
bash -n script.sh
shellcheck script.sh
bash -x script.sh
```

`bash -n` checks syntax without executing the script. ShellCheck provides static analysis. Tracing helps debug but may expose secrets in logs, so review output carefully. Quote variables, validate arguments, use least privilege and avoid interpolating untrusted input into shell commands.

## Practice challenge

Create a read-only disk-usage report script with configurable input paths and a clear error message for missing paths.
