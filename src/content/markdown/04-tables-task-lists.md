---
id: tables-task-lists
subject: markdown
order: 4
title: Tables, task lists and flavors
description: Know common extensions and portability tradeoffs.
difficulty: Intermediate
quiz:
  question: Are pipe tables required by the CommonMark core specification?
  options:
    - Yes
    - No
    - Only in code blocks
  answer: 1
---
## GitHub Flavored Markdown examples

```markdown
| Task | Status |
| --- | --- |
| Draft | Done |
| Review | In progress |

- [x] Write
- [ ] Review

~~Deprecated text~~
```

Tables, task lists and strikethrough are common in GitHub Flavored Markdown but are not all part of CommonMark core. Check your target renderer before relying on extensions.

## Practice challenge

Create a table with a command, its purpose and an example.
