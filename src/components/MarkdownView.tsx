import { renderMarkdown, type MarkdownDialect } from "../lib/markdown";

type Props = {
  source: string;
  className?: string;
  dialect?: MarkdownDialect;
};

export default function MarkdownView({
  source,
  className = "",
  dialect = "gfm",
}: Props) {
  const html = renderMarkdown(source, dialect);
  return (
    <div
      className={`markdown-body ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
