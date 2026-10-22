import { ArrowRight, Search } from "lucide-react";
import type { Lesson, Subject } from "../types";

type Result = { subject: Subject; lesson: Lesson | null; title: string; description: string };
type Props = { query: string; subjects: Subject[]; lessons: Lesson[]; onOpenSubject: (id: string) => void; onOpenLesson: (subjectId: string, lessonId: string) => void };

export default function SearchPage({ query, subjects, lessons, onOpenSubject, onOpenLesson }: Props) {
  const q = query.toLowerCase();
  const results: Result[] = [];
  subjects.forEach((subject) => {
    if (`${subject.name} ${subject.description} ${subject.category}`.toLowerCase().includes(q)) {
      results.push({ subject, lesson: null, title: `${subject.name} learning path`, description: subject.description });
    }
  });
  lessons.forEach((lesson) => {
    const subject = subjects.find((item) => item.id === lesson.subjectId);
    if (subject && `${subject.name} ${lesson.title} ${lesson.description} ${lesson.content}`.toLowerCase().includes(q)) {
      results.push({ subject, lesson, title: lesson.title, description: lesson.description });
    }
  });
  return <>
    <div className="breadcrumb">Workspace <span>/</span> Search</div>
    <div className="eyebrow dark">KNOWLEDGE SEARCH</div><h1 className="page-title">Find your answer.</h1><p className="page-subtitle">{results.length} results for <b>“{query}”</b></p>
    {results.length ? <div className="search-results">{results.map((result) => <button className="search-result" key={`${result.subject.id}/${result.lesson?.id ?? "course"}`} onClick={() => result.lesson ? onOpenLesson(result.subject.id, result.lesson.id) : onOpenSubject(result.subject.id)}><span className={`subject-symbol small ${result.subject.className}`}>{result.subject.symbol}</span><span className="search-result-content"><b>{result.title}</b><small>{result.subject.name} {result.lesson ? `· ${result.lesson.difficulty}` : "· Learning path"}</small><span>{result.description}</span></span><ArrowRight size={17} /></button>)}</div> : <div className="empty-state"><Search size={25} /><b>No matches yet</b><p>Try “functions”, “testing”, “links”, “quoting” or “concurrency”.</p></div>}
  </>;
}
