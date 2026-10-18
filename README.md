# Markbase Studio

A redesigned static learning website POC for Go, Python, Markdown and Shell scripting.

## Run
Open `index.html` in a browser, or run:

```bash
python3 -m http.server 8080
```

Visit http://localhost:8080.

## Features
- Professional dashboard and responsive sidebar navigation
- Four structured learning paths
- Lesson pages with examples, knowledge-check quizzes and practice prompts
- Browser-local lesson progress using localStorage
- Cross-library search
- Markdown playground with live preview and challenge starters
- Official reference links for each subject
- No backend or build step required

## Scope and production notes
This is a richer front-end POC. The curricula and lessons are starter content, not exhaustive documentation. The Markdown playground implements a limited safe subset, not full CommonMark/GFM. For production, use a maintained parser, move lessons into separate Markdown/MDX files with metadata, test accessibility and search quality, and add automated link checks. Progress is saved only in the current browser and is not synchronized across devices.
