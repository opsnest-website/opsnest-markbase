import type { ParsedLesson, Quiz } from "../types";

function parseScalar(value: string): string | number {
  const trimmed = value.trim();
  if (/^-?\d+$/.test(trimmed)) return Number(trimmed);
  if ((trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

/** Parses the intentionally small YAML-frontmatter subset used by lesson files. */
export function parseLesson(source: string, path: string): ParsedLesson {
  const match = source.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/);
  if (!match) throw new Error(`Missing frontmatter in ${path}`);
  const raw = match[1];
  const content = match[2].trim();
  const values: Record<string, string | number> = {};
  const quiz: Partial<Quiz> = {};
  let active: "options" | null = null;
  for (const line of raw.split("\n")) {
    const top = line.match(/^([\w-]+):\s*(.*)$/);
    if (top) {
      active = null;
      const [, key, value] = top;
      if (key === "quiz") continue;
      if (key === "options") {
        active = "options";
        quiz.options = [];
      } else {
        values[key] = parseScalar(value);
      }
      continue;
    }
    const question = line.match(/^\s+question:\s*(.*)$/);
    const answer = line.match(/^\s+answer:\s*(.*)$/);
    const options = line.match(/^\s+options:\s*$/);
    const option = line.match(/^\s+-\s+(.*)$/);
    if (question) { quiz.question = String(parseScalar(question[1])); active = null; }
    else if (answer) { quiz.answer = Number(parseScalar(answer[1])); active = null; }
    else if (options) { quiz.options = []; active = "options"; }
    else if (option && active === "options") { quiz.options?.push(String(parseScalar(option[1]))); }
  }
  const subjectId = String(values.subject ?? path.split("/").at(-2) ?? "");
  const id = String(values.id ?? path.split("/").at(-1)?.replace(/\.md$/, "") ?? "");
  const title = String(values.title ?? id);
  const description = String(values.description ?? "");
  const difficulty = String(values.difficulty ?? "Beginner");
  const order = Number(values.order ?? 999);
  const safeQuiz: Quiz = {
    question: quiz.question ?? "What is the key idea from this lesson?",
    options: quiz.options?.length ? quiz.options : ["Review the concept", "Skip the example", "Ignore errors"],
    answer: Number.isInteger(quiz.answer) ? quiz.answer! : 0,
  };
  if (!subjectId || !id || !content) throw new Error(`Invalid lesson metadata/content in ${path}`);
  if (safeQuiz.answer < 0 || safeQuiz.answer >= safeQuiz.options.length) {
    throw new Error(`Quiz answer out of range in ${path}`);
  }
  return { id, subjectId, title, description, difficulty, order, quiz: safeQuiz, content, path };
}
