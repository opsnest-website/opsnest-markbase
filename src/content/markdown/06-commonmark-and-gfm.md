---
id: commonmark-and-gfm
subject: markdown
title: CommonMark and GitHub Flavored Markdown
description: Understand the difference between a core Markdown specification and a dialect with extensions.
difficulty: Intermediate
order: 6
quiz:
  question: Which statement about Markdown tables is accurate?
  options:
    - Tables are required by the CommonMark core specification
    - Pipe tables are a GitHub Flavored Markdown extension
    - Every Markdown renderer handles tables identically
  answer: 1
---

# CommonMark and GitHub Flavored Markdown

Markdown has multiple implementations. A document that renders in one product may not render identically in another, especially when it uses extensions.

## CommonMark

[CommonMark](https://spec.commonmark.org/) defines a consistent core syntax and publishes examples that can be used to test parser behavior. Its core includes constructs such as paragraphs, headings, lists, block quotes, code blocks, links, images, emphasis, and escaping.

## GitHub Flavored Markdown (GFM)

[GFM](https://github.github.com/gfm/) builds on CommonMark and adds features including pipe tables, task lists, strikethrough, and autolinks.

For example, this table is GFM syntax:

```markdown
| Command | Purpose |
| --- | --- |
| `pwd` | Print the current directory |
| `ls` | List directory entries |
```

A renderer configured for GFM can render the table. A strict core-only renderer is not required to interpret it as a table.

## Choose a dialect deliberately

1. Check the renderer used by the target platform.
2. Prefer core syntax when content must be portable.
3. Use extensions when the publishing platform supports them and the extra formatting is useful.
4. Preview important documents in the actual target renderer.

Do not assume that a feature is universally supported just because it works in your editor.

## Further reading

- [CommonMark specification](https://spec.commonmark.org/)
- [GitHub Flavored Markdown specification](https://github.github.com/gfm/)
