import type { Lesson } from "../types";
import { parseLesson } from "../lib/frontmatter";

// Vite imports each Markdown lesson as source text at build time.
// Add a new .md file under src/content/<subject>/ and it is discovered automatically.
const lessonFiles = import.meta.glob("../content/**/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

export const lessons: Lesson[] = Object.entries(lessonFiles)
  .map(([path, source]) => parseLesson(source, path))
  .sort((a, b) => a.subjectId.localeCompare(b.subjectId) || a.order - b.order);

export function lessonsForSubject(subjectId: string) {
  return lessons.filter((lesson) => lesson.subjectId === subjectId);
}

export function findLesson(subjectId: string, lessonId: string) {
  return lessons.find((lesson) => lesson.subjectId === subjectId && lesson.id === lessonId);
}
