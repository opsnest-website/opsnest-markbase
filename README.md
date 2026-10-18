# Markbase — Markdown Learning Website (POC)

A self-contained, responsive documentation website. No build tools, backend, database, external fonts, or network access are required for the core experience.

## Run locally
Open `index.html` in a modern browser, or serve the directory:

```bash
python3 -m http.server 8080
```

Then open http://localhost:8080.

## Included
- Responsive documentation layout with sidebar navigation
- Search across the locally bundled Markdown knowledge pack
- Lessons: introduction, basic syntax, links/images, code/escaping, tables/task lists, advanced syntax, dialects, practical recipes, troubleshooting, cheat sheet
- Local live Markdown playground with preview
- Official reference links (CommonMark, GFM, GitHub docs)
- Content bundled directly in the site for this POC

## Notes
- This is a frontend POC, not a production Markdown parser. The playground supports a useful subset and escapes raw HTML.
- The initial knowledge pack is authored for learning and includes original explanations/examples. Official links are provided for verification and further reading.
- Before production, consider using a maintained Markdown parser, add automated link/content checks, formal source/license metadata, tests, and a content contribution workflow.
- Add future subjects as structured content records, rather than hard-coding each page into the layout.
