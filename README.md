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
├── public/
│   └── favicon.svg
├── src/
│   ├── components/       # Sidebar, top bar, cards, lesson UI
│   ├── content/          # Individual Markdown lesson files
│   │   ├── go/
│   │   ├── python/
│   │   ├── markdown/
│   │   └── shell/
│   ├── data/             # Subject metadata and lesson registry
│   ├── hooks/            # Browser-local progress
│   ├── lib/              # Markdown/frontmatter utilities
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
2. Add the lesson's metadata (title, description, order, difficulty and quiz) in YAML-style frontmatter.
3. Register the file in `src/data/lessons.ts` using `import.meta.glob`.
4. The shared lesson template renders it automatically.

## Current scope

- Four subjects: Go, Python, Markdown, Shell scripting.
- Search across subject metadata and lesson text.
- Knowledge-check quiz per lesson.
- Progress stored in `localStorage` for the current browser/device.
- Markdown playground using `marked` plus DOMPurify sanitization.
- Official reference links.
- Responsive layout.

This is a frontend POC, not exhaustive language documentation. Content should be expanded and reviewed over time. The playground is a Markdown renderer, not a code execution sandbox. Progress is local and is not synchronized across devices.
