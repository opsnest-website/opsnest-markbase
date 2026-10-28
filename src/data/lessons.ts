import type { Lesson } from "../types";

// Module index pages are navigation documents, not lessons.
// Metadata is small and needed everywhere, so it is bundled eagerly.
// See plugins/lessonContent.ts for how `?lesson-meta` and `?lesson-body` are produced.
const lessonMeta = import.meta.glob<Lesson>(["../content/**/*.md", "!**/index.md"], {
  eager: true,
  query: "?lesson-meta",
  import: "default",
});

// Bodies are split into one chunk per lesson and fetched when the lesson is opened.
const lessonBodies = import.meta.glob<string>(["../content/**/*.md", "!**/index.md"], {
  query: "?lesson-body",
  import: "default",
});

export const lessons: Lesson[] = Object.values(lessonMeta).sort(
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

export function loadLessonBody(lesson: Lesson): Promise<string> {
  const load = lessonBodies[`../content/${lesson.path}`];
  return load ? load() : Promise.reject(new Error(`No content for ${lesson.path}`));
}
