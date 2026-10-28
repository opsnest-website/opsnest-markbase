import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink, Lightbulb } from "lucide-react";
import type { Lesson, Subject } from "../types";
import MarkdownView from "../components/MarkdownView";
import { loadLessonBody } from "../data/lessons";

type Props = {
  subject: Subject;
  lesson: Lesson;
  index: number;
  total: number;
  isComplete: boolean;
  onComplete: () => void;
  onPrevious: () => void;
  onNext: () => void;
  onBack: () => void;
};

export default function LessonPage({ subject, lesson, index, total, isComplete, onComplete, onPrevious, onNext, onBack }: Props) {
  const [answer, setAnswer] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [body, setBody] = useState<string | null>(null);
  const [loadError, setLoadError] = useState(false);
  const correct = answer === lesson.quiz.answer;
  // The page is keyed per lesson in App, so this runs once per lesson.
  useEffect(() => {
    let active = true;
    loadLessonBody(lesson).then((content) => { if (active) setBody(content); }, () => { if (active) setLoadError(true); });
    return () => { active = false; };
  }, [lesson]);
  const practice = body?.match(/## Practice challenge\s*\n([\s\S]*?)(?=\n## |$)/i)?.[1]?.trim();
  return <>
    <div className="breadcrumb"><button onClick={onBack}>Library</button><span>/</span><button onClick={onBack}>{subject.name}</button><span>/</span>Module {index + 1}</div>
    <div className="lesson-layout">
      <article className="lesson-article">
        <div className="lesson-eyebrow"><span className={`subject-symbol tiny ${subject.className}`}>{subject.symbol}</span>{subject.name.toUpperCase()} <span>·</span> MODULE {String(index + 1).padStart(2, "0")}</div>
        <h1>{lesson.title}</h1><p className="lesson-description">{lesson.description}</p>
        <div className="lesson-tags"><span>{lesson.difficulty}</span><span>Concept + example</span><span>Practice included</span></div>
        {body !== null ? <MarkdownView source={body} /> : <div className="lesson-loading" role="status">{loadError ? "This lesson could not be loaded. Check your connection and reload the page." : "Loading lesson…"}</div>}
        <section className="knowledge-check">
          <div className="knowledge-heading"><span className="quiz-icon"><Lightbulb size={18} /></span><div><div className="eyebrow dark">CHECK YOUR UNDERSTANDING</div><h2>Knowledge check</h2></div></div>
          <p className="quiz-question">{lesson.quiz.question}</p>
          <div className="quiz-options">{lesson.quiz.options.map((option, optionIndex) => <label key={option} className={`quiz-option ${checked && optionIndex === lesson.quiz.answer ? "correct" : ""} ${checked && answer === optionIndex && !correct ? "incorrect" : ""}`}>
            <input type="radio" name="quiz-answer" value={optionIndex} checked={answer === optionIndex} onChange={() => { setAnswer(optionIndex); setChecked(false); }} />
            <span className="option-letter">{String.fromCharCode(65 + optionIndex)}</span><span>{option}</span>
          </label>)}</div>
          <div className="quiz-actions"><button className="button button-primary" onClick={() => setChecked(true)} disabled={answer === null}>Check answer</button>{checked && <span className={`quiz-feedback ${correct ? "success" : "retry"}`}>{correct ? "Correct — great work!" : "Not quite. Review the lesson and try again."}</span>}</div>
        </section>
        <section className="practice-box"><span className="practice-icon"><CheckCircle2 size={19} /></span><div><div className="eyebrow dark">YOUR TURN</div><h2>Practice challenge</h2><p>Complete this task in your own environment, then mark the lesson complete.</p><div className="practice-task">{practice ?? "Summarize the core concept and write a small example."}</div></div></section>
        <div className="lesson-actions"><button className="button button-light" onClick={onPrevious} disabled={index === 0}><ArrowLeft size={15} /> Previous</button><button className={`button ${isComplete ? "button-complete" : "button-primary"}`} onClick={onComplete}>{isComplete ? <><CheckCircle2 size={16} /> Completed</> : <>Mark lesson complete <CheckCircle2 size={16} /></>}</button><button className="button button-light" onClick={onNext} disabled={index >= total - 1}>Next <ArrowRight size={15} /></button></div>
      </article>
      <aside className="lesson-rail"><div className="rail-card"><div className="eyebrow dark">COURSE PROGRESS</div><b>{subject.name}</b><p>Module {index + 1} of {total}</p><div className="progress-track"><span style={{ width: `${(index + 1) / total * 100}%` }} /></div><a href={subject.officialUrl} target="_blank" rel="noreferrer">Official reference <ExternalLink size={13} /></a></div><div className="rail-card"><div className="eyebrow dark">LEARNING LOOP</div><ol><li>Understand the concept</li><li>Review the example</li><li>Check your understanding</li><li>Try the practice task</li></ol></div><div className="rail-note">Tip: small, consistent practice beats passive reading.</div></aside>
    </div>
    <footer className="footer"><button onClick={onBack}><ArrowLeft size={14} /> Course overview</button><span>{subject.name} · {lesson.title}</span></footer>
  </>;
}
