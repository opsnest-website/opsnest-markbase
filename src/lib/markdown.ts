import DOMPurify from "dompurify";
import { marked } from "marked";

export type MarkdownDialect = "commonmark" | "gfm";
export type MarkdownFeature = {
  name: string;
  dialect: "CommonMark" | "GFM extension" | "HTML / renderer-dependent";
  detail: string;
};

/** Render Markdown using an explicitly selected dialect, then sanitize HTML. */
export function renderMarkdown(source: string, dialect: MarkdownDialect = "gfm"): string {
  const html = marked.parse(source, {
    gfm: dialect === "gfm",
    breaks: false,
  });
  if (typeof html !== "string") return "";
  return DOMPurify.sanitize(html, {
    USE_PROFILES: { html: true },
    ADD_ATTR: ["target", "rel"],
  });
}

/**
 * A helpful heuristic for learners, not a full parser/conformance validator.
 * Detection labels are intentionally phrased as possible features.
 */
export function inspectMarkdownFeatures(source: string): MarkdownFeature[] {
  const features: MarkdownFeature[] = [];
  if (/^ {0,3}#{1,6}\s+.+/m.test(source) || /^ {0,3}(?:=+|-+)\s*$/m.test(source)) {
    features.push({ name: "Headings", dialect: "CommonMark", detail: "ATX or setext headings are part of CommonMark." });
  }
  if (/\*\*[^\n]+\*\*|__[^\n]+__/.test(source)) {
    features.push({ name: "Strong emphasis", dialect: "CommonMark", detail: "Double asterisks or underscores can mark strong emphasis." });
  }
  if (/```|~~~/.test(source)) {
    features.push({ name: "Fenced code blocks", dialect: "CommonMark", detail: "Fence length and indentation affect how code blocks are parsed." });
  }
  if (/^\s*[-+*]\s+\[[ xX]\]\s+/m.test(source)) {
    features.push({ name: "Task lists", dialect: "GFM extension", detail: "Checkbox list items are a GitHub Flavored Markdown extension." });
  }
  if (/^\s*\|?.+\|.+\n\s*\|?\s*:?-{3,}:?\s*\|/m.test(source)) {
    features.push({ name: "Tables", dialect: "GFM extension", detail: "Pipe tables are supported by GFM but are not part of core CommonMark." });
  }
  if (/~~[^\n]+~~/.test(source)) {
    features.push({ name: "Strikethrough", dialect: "GFM extension", detail: "Tilde-delimited strikethrough is a GFM extension." });
  }
  if (/<[A-Za-z][^>]*>/.test(source)) {
    features.push({ name: "Raw HTML", dialect: "HTML / renderer-dependent", detail: "HTML rendering depends on the parser and sanitization policy. Markbase sanitizes rendered HTML." });
  }
  if (/\[[^\]]+\]\([^\)]+\)/.test(source)) {
    features.push({ name: "Inline links", dialect: "CommonMark", detail: "Inline links use a label and destination; always review destinations before publishing." });
  }
  if (!features.length) {
    features.push({ name: "Plain text", dialect: "CommonMark", detail: "Ordinary text is interpreted as paragraphs unless another block construct applies." });
  }
  return features;
}
