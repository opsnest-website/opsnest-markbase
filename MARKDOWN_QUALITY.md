# Markdown quality and learning features

## Renderer behavior

`src/lib/markdown.ts` is the shared rendering and feature-inspection utility. It supports two explicit rendering modes using `marked`: CommonMark mode (`gfm: false`) and GitHub Flavored Markdown (`gfm: true`). Both outputs are sanitized with DOMPurify before being passed to React's HTML sink.

The CommonMark mode disables GFM extensions in Marked; it should not be represented as a formally certified CommonMark implementation until the upstream CommonMark conformance suite has been run and any differences documented.

## Playground additions

- Dialect selector (CommonMark mode / GFM)
- Live rendered preview
- Syntax inspector with dialect labels and explanatory hints
- Practice challenges with requirement checks
- Sanitized rendering and a security reminder

The syntax inspector and challenge checks are deliberately heuristic. They are educational aids, not authoritative parsers, grading of prose quality, or a substitute for conformance tests.

## Tests

Run:

```bash
npm run test:markdown
```

The smoke tests cover headings, fenced code, emphasis, GFM tables, strikethrough, and task lists. These are a small project-owned test set, not the complete CommonMark or GFM conformance suites.

For a stronger release gate, obtain the CommonMark specification test corpus from the official repository and compare normalized HTML output against every example. Also run the GFM test suite if GFM is the intended default. Review upstream licensing before redistributing their specification examples or test corpus.

## Security notes

DOMPurify sanitizes rendered HTML. Do not disable sanitization for convenience. Sanitization is one layer; also review link handling, content-source trust, dependency updates, and any future embedded media or custom HTML features.
