export type Quiz = {
  question: string;
  options: string[];
  answer: number;
};

export type Lesson = {
  id: string;
  subjectId: string;
  title: string;
  description: string;
  difficulty: string;
  order: number;
  quiz: Quiz;
  /** Path relative to src/content, e.g. "gke/02-containers/01-intro.md". */
  path: string;
};

/** A lesson with its Markdown body. Bodies are loaded on demand, not bundled with the metadata. */
export type ParsedLesson = Lesson & { content: string };

export type ContentLayout = "flat" | "nested";

// export type Subject = {
//   id: string;
//   name: string;
//   symbol: string;
//   className: string;
//   category: string;
//   level: string;
//   description: string;
//   officialUrl: string;
//   tutorialUrl: string;
//   contentLayout?: ContentLayout;
//   contentRoot?: string;
// };

export type Subject = {
  id: string;
  name: string;
  symbol: string;
  icon?: string;
  className: string;
  category: string;
  level: string;
  description: string;
  officialUrl: string;
  tutorialUrl: string;
  contentLayout?: "flat" | "nested";
  contentRoot?: string;
};

export type PageState =
  | { type: "home" }
  | { type: "course"; subjectId: string }
  | { type: "lesson"; subjectId: string; lessonId: string }
  | { type: "playground" }
  | { type: "search"; query: string };
