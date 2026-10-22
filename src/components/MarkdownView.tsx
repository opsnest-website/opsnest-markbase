import DOMPurify from "dompurify";
import { marked } from "marked";

marked.setOptions({ gfm: true, breaks: false });

type Props = { source: string; className?: string };

export default function MarkdownView({ source, className = "" }: Props) {
  const html = DOMPurify.sanitize(marked.parse(source) as string, {
    USE_PROFILES: { html: true },
    ADD_ATTR: ["target", "rel"],
  });
  return <div className={`markdown-body ${className}`} dangerouslySetInnerHTML={{ __html: html }} />;
}
