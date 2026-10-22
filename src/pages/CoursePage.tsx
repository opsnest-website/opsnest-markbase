import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import type { Lesson, Subject } from "../types";

type Props = { subject: Subject; lessons: Lesson[]; isComplete: (key: string) => boolean; onOpenLesson: (id: string) => void; onHome: () => void };

export default function CoursePage({ subject, lessons, isComplete, onOpenLesson, onHome }: Props) {
  const done = lessons.filter((lesson) => isComplete(`${subject.id}/${lesson.id}`)).length;
  const percent = lessons.length ? Math.round(done / lessons.length * 100) : 0;
  return <>
    <div className="breadcrumb"><button onClick={onHome}>Library</button><span>/</span>{subject.name}</div>
    <section className="course-banner">
      <div className={`subject-symbol large ${subject.className}`}>{subject.symbol}</div>
      <div className="course-banner-main"><span className="level-pill">{subject.category}</span><h1>{subject.name}</h1><p>{subject.description}</p></div>
      <a className="official-link" href={subject.officialUrl} target="_blank" rel="noreferrer">Official docs <ExternalLink size={14} /></a>
    </section>
    <section className="course-progress"><div className="progress-row"><div><b>Your learning path</b><small>Work through in order or jump to any module.</small></div><strong>{done} <span>/ {lessons.length} completed</span></strong></div><div className="progress-track"><span style={{ width: `${percent}%` }} /></div></section>
    <section className="section course-modules"><div className="section-heading"><div><div className="eyebrow dark">THE CURRICULUM</div><h2>Course modules</h2><p>Each lesson includes a concept, an example, a knowledge check and a practice task.</p></div><span className="percent-badge">{percent}%</span></div>
      {lessons.length ? <div className="lesson-list">{lessons.map((lesson, index) => {
        const doneLesson = isComplete(`${subject.id}/${lesson.id}`);
        return <button className={`lesson-row ${doneLesson ? "is-done" : ""}`} key={lesson.id} onClick={() => onOpenLesson(lesson.id)}>
          <span className="lesson-number">{doneLesson ? <CheckCircle2 size={18} /> : String(index + 1).padStart(2, "0")}</span>
          <span className="lesson-row-main"><b>{lesson.title}</b><small>{lesson.description}</small><span className="lesson-meta"><span>{lesson.difficulty}</span><span>Knowledge check</span><span>Practice</span></span></span><ArrowRight className="lesson-arrow" size={18} />
        </button>;
      })}</div> : <div className="empty-state">No lessons are registered for this subject yet. Add a Markdown file under <code>src/content/{subject.id}/</code>.</div>}
    </section>
    <section className="reference-panel"><div><b>Learn from the source</b><p>Use the official documentation alongside these learning notes.</p></div><div className="reference-actions"><a href={subject.officialUrl} target="_blank" rel="noreferrer">Official documentation <ExternalLink size={14} /></a><a href={subject.tutorialUrl} target="_blank" rel="noreferrer">Tutorial / specification <ExternalLink size={14} /></a></div></section>
    <footer className="footer"><button onClick={onHome}><ArrowLeft size={14} /> Back to library</button><span>Markbase Studio · {subject.name}</span></footer>
  </>;
}
