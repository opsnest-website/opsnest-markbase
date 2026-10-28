---
id: parsing-and-conformance
subject: markdown
title: Markdown Parsing and Conformance Testing
description: Learn why Markdown parsing rules matter and how example-based tests catch renderer regressions.
difficulty: Advanced
order: 7
quiz:
  question: What does a conformance test compare?
  options:
    - A Markdown source document with an expected parse result
    - The author's writing style with a spelling dictionary
    - A Markdown file's size with its filename
  answer: 0
---

# Markdown Parsing and Conformance Testing

A Markdown parser interprets source text according to a set of syntax rules and produces a representation, commonly HTML. Ambiguous-looking input can be interpreted differently by different implementations, which is why specifications and tests matter.

## Example-based tests

A useful test contains:

- **Input:** the Markdown source.
- **Expected output:** the result required by the chosen specification or product behavior.
- **Comparison:** a test that reports whether actual and expected output match.

For example:

```markdown
# Hello
```

A typical expected HTML result is:

```html
<h1>Hello</h1>
```

Exact comparisons may need to account for the specification's normalization rules and the implementation's documented output conventions.

## Use the CommonMark examples

The CommonMark repository includes a specification with embedded examples and tools for using them as tests. Use those examples to evaluate a parser, but do not claim full conformance after testing only a handful of cases.

For a renderer upgrade:

1. Pin the dependency version.
2. Run project smoke tests for syntax used by your content.
3. Run the relevant upstream conformance suite where feasible.
4. Review failures instead of automatically changing expected output.
5. Test GFM extensions separately if your product supports GFM.

## Practical exercise

Create test cases for a heading, nested list, fenced code block, inline link, escaped special character, table, and task list. Mark each test as core CommonMark or an extension. Run tests whenever the renderer configuration or dependency changes.

## Further reading

- [CommonMark specification repository](https://github.com/commonmark/commonmark-spec)
- [CommonMark specification](https://spec.commonmark.org/)
