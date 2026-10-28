---
id: safe-markdown-rendering
subject: markdown
title: Safe Markdown Rendering
description: Understand why rendered Markdown must be treated as untrusted HTML and how sanitization fits into a secure workflow.
difficulty: Intermediate
order: 8
quiz:
  question: Why sanitize generated HTML when rendering Markdown from untrusted sources?
  options:
    - To prevent all possible security issues without any other controls
    - To reduce the risk of dangerous HTML and attributes reaching the page
    - To make every Markdown dialect identical
  answer: 1
---

# Safe Markdown Rendering

Markdown is text, but a renderer often converts it into HTML. If content comes from users, repositories, or other untrusted sources, the resulting HTML must be handled carefully.

## A safer rendering pipeline

1. Parse Markdown with a maintained library.
2. Sanitize generated HTML with a maintained sanitizer such as [DOMPurify](https://github.com/cure53/DOMPurify).
3. Insert only the sanitized output into the page.
4. Review how links, images, raw HTML, and embedded content are handled.
5. Keep parser and sanitizer dependencies updated.

Sanitization is a layer of defense, not a guarantee that every surrounding application behavior is safe. Avoid disabling it just to make an example render.

## Practical checks

- Verify that script elements and event-handler attributes do not survive sanitization.
- Check whether raw HTML is permitted by the renderer configuration.
- Decide whether external links need additional attributes or policy.
- Test with hostile sample input in a controlled automated test environment.
- Review changes to sanitizer configuration carefully.

## Keep security and compatibility separate

A Markdown feature can be syntactically valid but still require a security decision. CommonMark and GFM describe syntax behavior; they do not replace your application's content-security policy or sanitization requirements.

## Further reading

- [DOMPurify project](https://github.com/cure53/DOMPurify)
- [CommonMark specification](https://spec.commonmark.org/)
