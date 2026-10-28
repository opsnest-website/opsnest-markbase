---
id: readme
subject: markdown
order: 5
title: README and troubleshooting
description: Use Markdown in real project docs and diagnose rendering issues.
difficulty: Intermediate
quiz:
  question: What is a good first check when a page unexpectedly renders as code?
  options:
    - Look for a missing closing code fence
    - Rename every heading
    - Remove all blank lines
  answer: 0
---
## A practical README structure

```markdown
# Project

What it does and why it exists.

## Requirements
- Runtime
- Dependencies

## Installation

```bash
./install.sh
```

## Usage
Explain a working example.

## Troubleshooting
Document common errors.
```

Prefer logical heading hierarchy, useful links, copy-ready commands and examples verified against the target renderer. An unclosed code fence can cause the rest of a page to render as code.

## Practice challenge

Write a README with installation, usage, configuration and troubleshooting sections.
