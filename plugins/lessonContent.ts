import fs from "node:fs";
import path from "node:path";
import type { Plugin } from "vite";
import { parseLesson } from "../src/lib/frontmatter";
import { subjects } from "../src/config/subjects";
import type { Lesson, ParsedLesson } from "../src/types";

const CONTENT_DIR = path.resolve(__dirname, "../src/content");
const META_SUFFIX = ".md?lesson-meta";
const BODY_SUFFIX = ".md?lesson-body";
const SEARCH_ID = "virtual:markbase-search";
const RESOLVED_SEARCH_ID = "\0" + SEARCH_ID;

function relativePath(file: string) {
  return path.relative(CONTENT_DIR, file).split(path.sep).join("/");
}

function readLesson(file: string): ParsedLesson {
  const lesson = parseLesson(fs.readFileSync(file, "utf8"), file);
  return { ...lesson, path: relativePath(file) };
}

function lessonFiles(): string[] {
  return (fs.readdirSync(CONTENT_DIR, { recursive: true }) as string[])
    .filter((file) => file.endsWith(".md") && path.basename(file) !== "index.md")
    .map((file) => path.join(CONTENT_DIR, file))
    .sort();
}

/** Returns human-readable problems that would break routing, ordering or the sidebar. */
export function validateLessons(lessons: ParsedLesson[]): string[] {
  const errors: string[] = [];
  const subjectIds = new Set(subjects.map((subject) => subject.id));
  const ids = new Map<string, string>();
  const orders = new Map<string, string>();
  for (const lesson of lessons) {
    if (!subjectIds.has(lesson.subjectId)) {
      errors.push(`${lesson.path}: unknown subject "${lesson.subjectId}" (add it to src/config/subjects.ts)`);
    }
    if (!/^[a-z0-9][a-z0-9-]*$/.test(lesson.id)) {
      errors.push(`${lesson.path}: id "${lesson.id}" must be lowercase letters, digits and hyphens`);
    }
    if (!lesson.description) errors.push(`${lesson.path}: missing description`);
    const idKey = `${lesson.subjectId}/${lesson.id}`;
    if (ids.has(idKey)) errors.push(`${lesson.path}: duplicate id "${lesson.id}" (also used by ${ids.get(idKey)})`);
    ids.set(idKey, lesson.path);
    const orderKey = `${lesson.subjectId}/${lesson.order}`;
    if (orders.has(orderKey)) errors.push(`${lesson.path}: duplicate order ${lesson.order} (also used by ${orders.get(orderKey)})`);
    orders.set(orderKey, lesson.path);
  }
  return errors;
}

/** Lowercased, punctuation-light lesson text used for full-text search. */
function searchText(markdown: string) {
  return markdown.replace(/[#*_>`|~[\]()-]+/g, " ").replace(/\s+/g, " ").trim().toLowerCase();
}

/**
 * Splits lesson Markdown into small eagerly-bundled metadata (`?lesson-meta`),
 * lazily-loaded bodies (`?lesson-body`) and a lazily-loaded search index.
 */
export default function lessonContent(): Plugin {
  return {
    name: "markbase-lesson-content",
    enforce: "pre",
    buildStart() {
      const errors = validateLessons(lessonFiles().map(readLesson));
      if (errors.length) this.error(`Invalid lesson content:\n  ${errors.join("\n  ")}`);
    },
    resolveId(id) {
      return id === SEARCH_ID ? RESOLVED_SEARCH_ID : null;
    },
    load(id) {
      if (id.endsWith(META_SUFFIX)) {
        const { content: _content, ...meta } = readLesson(id.slice(0, -"?lesson-meta".length));
        return `export default ${JSON.stringify(meta satisfies Lesson)};`;
      }
      if (id.endsWith(BODY_SUFFIX)) {
        return `export default ${JSON.stringify(readLesson(id.slice(0, -"?lesson-body".length)).content)};`;
      }
      if (id === RESOLVED_SEARCH_ID) {
        const entries = lessonFiles().map((file) => {
          this.addWatchFile(file);
          const lesson = readLesson(file);
          return { key: `${lesson.subjectId}/${lesson.id}`, text: searchText(lesson.content) };
        });
        return `export default ${JSON.stringify(entries)};`;
      }
      return null;
    },
  };
}
