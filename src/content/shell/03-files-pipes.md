---
id: files-pipes
subject: shell
order: 3
title: Pipes, files and text processing
description: Combine commands with redirection and Unix text tools.
difficulty: Intermediate
quiz:
  question: What does a pipe connect by default?
  options:
    - One command's stdout to another command's stdin
    - Two processes' permissions
    - Two filesystems
  answer: 0
---
## Build a pipeline

```bash
grep -h 'ERROR' ./*.log 2>/dev/null | sort | uniq -c

# Inspect disk usage safely
du -sh ./logs
```

Pipes connect one command's stdout to another command's stdin. Redirection can save output or separate errors. For robust scripts, consider pipeline exit statuses and filenames containing unusual characters.

## Practice challenge

Count error lines in sample logs and save a report to a separate output file.
