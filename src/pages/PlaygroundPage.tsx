import { useMemo, useState } from "react";
import { CheckCircle2, Clipboard, RotateCcw, Sparkles, ShieldCheck } from "lucide-react";
import MarkdownView from "../components/MarkdownView";
import { inspectMarkdownFeatures, type MarkdownDialect } from "../lib/markdown";

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
type Challenge = {
  id: string;
  title: string;
  description: string;
  starter: string;
  checks: { label: string; test: (source: string) => boolean }[];
};

const challenges: Challenge[] = [
  {
    id: "table",
    title: "01 · Comparison table",
    description: "Create a table with headers Tool, Use case, and Notes, and at least two data rows.",
    starter: "# Tool comparison\n\nCompare tools used in software delivery.\n\n| Tool | Use case | Notes |\n| --- | --- | --- |\n| Go | Services | Compiled |\n| Python | Automation | Readable |",
    checks: [
      { label: "Has a heading", test: (s) => /^#\s+.+/m.test(s) },
      { label: "Has a table separator", test: (s) => /^\s*\|?\s*:?-{3,}/m.test(s) },
      { label: "Mentions at least two tools", test: (s) => /\|\s*(Go|Python|Shell|Node|Java)\s*\|/i.test(s) && (s.match(/^\s*\|.+\|\s*$/gm)?.length ?? 0) >= 4 },
    ],
  },
  {
    id: "readme",
    title: "02 · Project README",
    description: "Document a project with installation, usage, and troubleshooting sections.",
    starter: "# Project name\n\nA short description of this project.\n\n## Installation\n\n```bash\nnpm install\n```\n\n## Usage\nExplain a working example.\n\n## Troubleshooting\nDocument common issues.",
    checks: [
      { label: "Has a top-level title", test: (s) => /^#\s+.+/m.test(s) },
      { label: "Has an installation section", test: (s) => /^#{1,6}\s+installation\b/im.test(s) },
      { label: "Has a usage section", test: (s) => /^#{1,6}\s+usage\b/im.test(s) },
      { label: "Has a troubleshooting section", test: (s) => /^#{1,6}\s+troubleshooting\b/im.test(s) },
      { label: "Includes a fenced code example", test: (s) => /```[\s\S]*?```/.test(s) },
    ],
  },
  {
    id: "links",
    title: "03 · Links and code",
    description: "Write a short guide containing an inline link and a fenced shell command.",
    starter: "# Quick guide\n\nRead the [Markdown guide](https://commonmark.org/help/).\n\nRun this command:\n\n```bash\nprintf 'hello\\n'\n```",
    checks: [
      { label: "Has a heading", test: (s) => /^#\s+.+/m.test(s) },
      { label: "Has a Markdown link", test: (s) => /\[[^\]]+\]\(https?:\/\/[^)]+\)/.test(s) },
      { label: "Has a fenced code block", test: (s) => /```[\s\S]*?```/.test(s) },
    ],
  },
];

export default function PlaygroundPage({ onBack }: Props) {
  const [source, setSource] = useState(starter);
  const [dialect, setDialect] = useState<MarkdownDialect>("gfm");
  const [activeChallenge, setActiveChallenge] = useState<string | null>(null);
  const words = source.trim() ? source.trim().split(/\s+/).length : 0;
  const features = useMemo(() => inspectMarkdownFeatures(source), [source]);
  const challenge = challenges.find((item) => item.id === activeChallenge);
  const checks = challenge?.checks.map((item) => ({ ...item, passed: item.test(source) })) ?? [];
  const passedCount = checks.filter((item) => item.passed).length;

  async function copySource() {
    try {
      await navigator.clipboard.writeText(source);
    } catch {
      // Clipboard may be unavailable on non-secure origins; the source remains selectable.
    }
  }

  return (
    <>
      <div className="breadcrumb"><button onClick={onBack}>Library</button><span>/</span>Markdown playground</div>
      <div className="eyebrow dark">INTERACTIVE WORKSPACE</div>
      <h1 className="page-title">Markdown playground</h1>
      <p className="page-subtitle">Edit Markdown, compare dialect behavior, inspect detected syntax, and practice real documentation tasks.</p>
      <div className="info-banner"><Sparkles size={17} /><span>Rendering runs locally in your browser. Rendered HTML is sanitized before display. Syntax detection is a learning aid, not a complete parser validator.</span></div>

      <div className="editor-toolbar">
        <span>{words} words <span>·</span> {source.length} characters</span>
        <div>
          <label className="dialect-control">Dialect
            <select value={dialect} onChange={(event) => setDialect(event.target.value as MarkdownDialect)} aria-label="Markdown dialect">
              <option value="commonmark">CommonMark mode</option>
              <option value="gfm">GitHub Flavored Markdown</option>
            </select>
          </label>
          <button className="button button-light" onClick={() => { setSource(starter); setActiveChallenge(null); }}><RotateCcw size={14} /> Reset</button>
          <button className="button button-primary" onClick={copySource}><Clipboard size={14} /> Copy source</button>
        </div>
      </div>

      <div className="playground-grid">
        <div className="editor-pane"><div className="pane-label"><span className="pane-dot" /> MARKDOWN SOURCE</div><textarea value={source} onChange={(event) => setSource(event.target.value)} spellCheck={false} aria-label="Markdown source editor" /></div>
        <div className="preview-pane"><div className="pane-label"><span className="pane-dot preview-dot" /> LIVE PREVIEW · {dialect === "gfm" ? "GFM" : "COMMONMARK MODE"}</div><div className="preview-content"><MarkdownView source={source} dialect={dialect} /></div></div>
      </div>

      <section className="section">
        <div className="section-heading"><div><div className="eyebrow dark">SYNTAX INSPECTOR</div><h2>What syntax is in your document?</h2><p>Heuristic hints explain common syntax; they do not replace parser conformance tests.</p></div></div>
        <div className="feature-list">
          {features.map((feature) => <article className="feature-item" key={`${feature.name}-${feature.dialect}`}><div className="feature-item-top"><b>{feature.name}</b><span className={`feature-badge ${feature.dialect === "GFM extension" ? "feature-badge-gfm" : ""}`}>{feature.dialect}</span></div><p>{feature.detail}</p></article>)}
        </div>
        <div className="security-note"><ShieldCheck size={17} /><span><b>Security:</b> Preview HTML is sanitized with DOMPurify. Sanitization reduces risk but does not make arbitrary Markdown content inherently trustworthy; review external links and embedded content before publishing.</span></div>
      </section>

      <section className="section">
        <div className="section-heading"><div><div className="eyebrow dark">PRACTICE PROMPTS</div><h2>Learn by building</h2><p>Load a challenge, edit the source, and check your work against practical requirements.</p></div></div>
        <div className="challenge-grid">
          {challenges.map((item) => <button className={`challenge-card ${activeChallenge === item.id ? "challenge-card-active" : ""}`} key={item.id} onClick={() => { setSource(item.starter); setActiveChallenge(item.id); }}><b>{item.title}</b><span>{item.description}</span></button>)}
        </div>
        {challenge && <div className="challenge-checker"><div className="challenge-checker-heading"><div><b>{challenge.title}</b><p>{passedCount} of {checks.length} requirements satisfied</p></div><span className={`challenge-score ${passedCount === checks.length ? "challenge-score-complete" : ""}`}>{Math.round((passedCount / checks.length) * 100)}%</span></div><div className="challenge-requirements">{checks.map((item) => <div className={`challenge-requirement ${item.passed ? "passed" : "pending"}`} key={item.label}><CheckCircle2 size={16} /><span>{item.label}</span><b>{item.passed ? "Met" : "Needs work"}</b></div>)}</div><p className="challenge-disclaimer">These checks validate simple document requirements, not writing quality or every valid Markdown interpretation.</p></div>}
      </section>
      <footer className="footer"><button onClick={onBack}>Back to library</button><span>Markdown playground · Local-only preview</span></footer>
    </>
  );
}
