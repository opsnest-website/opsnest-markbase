# Markbase — Learning Studio

A maintainable React + TypeScript + Vite learning website. The UI, reusable components, metadata, and learning content are separated.

## Requirements
- Node.js 20.19+ or 22.12+
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Production build

```bash
npm run check
npm run build
npm run preview
```

The static production output is generated in `dist/`.

## Project structure

```text
markbase-platform/
├── plugins/
│   └── lessonContent.ts  # Build-time lesson parsing, validation and search index
├── public/
│   └── favicon.svg
├── src/
│   ├── components/       # Sidebar, top bar, cards, lesson UI
│   ├── content/          # Individual Markdown lesson files
│   │   ├── gke/          # Nested: one folder per module, each with an index.md
│   │   ├── go/
│   │   ├── python/
│   │   ├── markdown/
│   │   └── shell/
│   ├── config/           # Subject definitions (subjects.ts)
│   ├── data/             # Lesson registry (discovered automatically)
│   ├── hooks/            # Browser-local progress
│   ├── lib/              # Markdown, frontmatter and hash-route utilities
│   ├── pages/            # Dashboard, course, lesson, playground, search
│   ├── styles/           # Global design system
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
└── vite.config.ts
```

## Adding a lesson

1. Add a `.md` file under the relevant `src/content/<subject>/` directory.
2. Add YAML-style frontmatter: `id`, `title`, `description`, `order`, `difficulty`, and optionally `subject` and `quiz`.
3. That's it: lessons are discovered automatically (`index.md` files are module overviews and are skipped).

`npm run dev` and `npm run build` validate all lessons and fail with a clear message if a lesson has an unknown subject, an invalid or duplicate `id`, a duplicate `order` within its subject, or no description. A missing `order` defaults to 999, so give every lesson one.

Lessons have shareable URLs such as `#/course/markdown/readme` (`#/course/<subject>/<id>`).

### How content is bundled

Lesson metadata is bundled with the app, but each lesson body is a separate small chunk fetched when the lesson is opened, and the full-text search index is fetched the first time someone searches. This keeps the initial download small as the GKE course grows. See `plugins/lessonContent.ts`.

## Current scope

- Five subjects: GKE, Go, Python, Markdown, Shell scripting.
- Search across subject metadata and lesson text.
- Knowledge-check quiz per lesson.
- Progress stored in `localStorage` for the current browser/device, with export/import to move it between devices.
- Markdown playground using `marked` plus DOMPurify sanitization.
- Official reference links.
- Responsive layout.

This is a frontend POC, not exhaustive language documentation. Content should be expanded and reviewed over time. The playground is a Markdown renderer, not a code execution sandbox. Progress is local and is not synchronized across devices.

## Markdown learning and quality tools

The Markdown playground supports a CommonMark-oriented mode and GitHub Flavored Markdown (GFM), live preview, a syntax inspector, and guided documentation challenges. Shared rendering and sanitization live in `src/lib/markdown.ts`; the reusable `MarkdownView` component uses that utility.

Run the project checks after installing dependencies:

```bash
npm run check
npm run test:markdown
npm run build
```

See [`MARKDOWN_QUALITY.md`](./MARKDOWN_QUALITY.md) for the behavior, test coverage, known limitations, and recommended conformance-testing follow-up. The syntax inspector is heuristic, and the CommonMark mode is not claimed to be fully conformant until the complete upstream test suite is run.

