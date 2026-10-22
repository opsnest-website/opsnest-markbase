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
  content: string;
  path: string;
};

export type Subject = {
  id: string;
  name: string;
  symbol: string;
  className: string;
  category: string;
  level: string;
  description: string;
  officialUrl: string;
  tutorialUrl: string;
};

export type PageState =
  | { type: "home" }
  | { type: "course"; subjectId: string }
  | { type: "lesson"; subjectId: string; lessonId: string }
  | { type: "playground" }
  | { type: "search"; query: string };
