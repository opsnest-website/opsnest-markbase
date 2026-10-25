import type { Lesson } from "../types";
import { parseLesson } from "../lib/frontmatter";

const lessonFiles = import.meta.glob("../content/**/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

export const lessons: Lesson[] = Object.entries(lessonFiles)
  // Module index pages are navigation documents, not lessons.
  .filter(([path]) => !path.endsWith("/index.md"))
  .map(([path, source]) => parseLesson(source, path))
  .sort(
    (a, b) =>
      a.subjectId.localeCompare(b.subjectId) ||
      a.order - b.order
  );

export function lessonsForSubject(subjectId: string) {
  return lessons.filter((lesson) => lesson.subjectId === subjectId);
}

export function findLesson(subjectId: string, lessonId: string) {
  return lessons.find(
    (lesson) =>
      lesson.subjectId === subjectId &&
      lesson.id === lessonId
  );
}