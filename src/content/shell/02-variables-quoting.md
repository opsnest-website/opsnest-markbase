---
id: variables-quoting
subject: shell
title: Variables and quoting
description: Use safe expansion and preserve spaces in filenames.
difficulty: Beginner
order: 2
quiz:
  question: Why quote a variable such as "$filename" when passing it to a command?
  options:
    - To preserve spaces and avoid unintended splitting
    - To make the file executable
    - To suppress every command error
  answer: 0
---
## Quote variable expansions

```bash
#!/usr/bin/env bash
set -u
name="${1:-world}"
printf 'Hello, %s!\n' "$name"
```

Double quotes preserve the result as one argument and prevent unwanted word splitting and pathname expansion. Single quotes preserve literal characters. Avoid using `eval` on untrusted input.

## Practice challenge

Test your script with an argument containing spaces.
