import { useState } from "react";
import { Clipboard, RotateCcw, Sparkles } from "lucide-react";
import MarkdownView from "../components/MarkdownView";

const starter = `# Hello, Markbase!

Write **Markdown** and see the preview update.

## My checklist
- [x] Learn the basics
- [ ] Practice links
- [ ] Publish a README

> Clear documentation helps teams work better.

\`\`\`bash
echo "Hello, world!"
\`\`\`

| Syntax | Purpose |
| --- | --- |
| \`#\` | Heading |
| \`**text**\` | Bold |`;

type Props = { onBack: () => void };

export default function PlaygroundPage({ onBack }: Props) {
  const [source, setSource] = useState(starter);
  const words = source.trim() ? source.trim().split(/\s+/).length : 0;
  async function copySource() {
    try {
      await navigator.clipboard.writeText(source);
    } catch {
      // Clipboard access can be unavailable on non-secure origins; source remains selectable.
    }
  }
  return <>
    <div className="breadcrumb"><button onClick={onBack}>Library</button><span>/</span>Markdown playground</div>
    <div className="eyebrow dark">INTERACTIVE WORKSPACE</div><h1 className="page-title">Markdown playground</h1>
    <p className="page-subtitle">Write Markdown on the left and preview the rendered result on the right. The renderer runs locally in your browser.</p>
    <div className="info-banner"><Sparkles size={17} /><span>Uses a maintained Markdown parser with HTML sanitization. No content is sent to a server.</span></div>
    <div className="editor-toolbar"><span>{words} words <span>·</span> {source.length} characters</span><div><button className="button button-light" onClick={() => setSource(starter)}><RotateCcw size={14} /> Reset</button><button className="button button-primary" onClick={copySource}><Clipboard size={14} /> Copy source</button></div></div>
    <div className="playground-grid"><div className="editor-pane"><div className="pane-label"><span className="pane-dot" /> MARKDOWN SOURCE</div><textarea value={source} onChange={(event) => setSource(event.target.value)} spellCheck={false} aria-label="Markdown source editor" /></div><div className="preview-pane"><div className="pane-label"><span className="pane-dot preview-dot" /> LIVE PREVIEW</div><div className="preview-content"><MarkdownView source={source} /></div></div></div>
    <section className="section"><div className="section-heading"><div><div className="eyebrow dark">PRACTICE PROMPTS</div><h2>Try a challenge</h2><p>Load a starter task into the editor and customize it.</p></div></div><div className="challenge-grid"><button className="challenge-card" onClick={() => setSource("# Tool comparison\n\n| Tool | Use case | Notes |\n| --- | --- | --- |\n| Go | Services | Compiled |\n| Python | Automation | Readable |\n| Shell | System tasks | Glue commands |")}><b>01 · Comparison table</b><span>Compare three tools and their use cases.</span></button><button className="challenge-card" onClick={() => setSource("# Project name\n\nA short description of this project.\n\n## Installation\n\n```bash\nnpm install\n```\n\n## Usage\nExplain a working example.\n\n## Troubleshooting\nDocument common issues.")}><b>02 · Project README</b><span>Add installation, usage and troubleshooting sections.</span></button></div></section>
    <footer className="footer"><button onClick={onBack}>Back to library</button><span>Markdown playground · Local-only preview</span></footer>
  </>;
}
