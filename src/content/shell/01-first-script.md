---
id: first-script
subject: shell
title: Shell fundamentals and first script
description: Understand commands, shebangs, exit statuses and execution.
difficulty: Beginner
order: 1
quiz:
  question: What does an exit status of zero conventionally indicate?
  options:
    - Success
    - A warning in every shell
    - The script was never executed
  answer: 0
---
## Your first Bash script

```bash
#!/usr/bin/env bash
printf 'Hello, world!\n'
```

Save as `hello.sh` and run `bash hello.sh`. A shebang selects an interpreter when a script is executed directly. A command's exit status conventionally uses zero for success and non-zero for failure.

## Practice challenge

Write a script that prints the current user and current directory.
