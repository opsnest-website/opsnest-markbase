import { ArrowRight, BookOpen, Code2, GraduationCap, Search } from "lucide-react";
import type { Subject } from "../types";
import SubjectCard from "../components/SubjectCard";

type Props = {
  subjects: Subject[];
  progressCounts: Record<string, { done: number; total: number }>;
  completedCount: number;
  totalLessons: number;
  onOpenSubject: (id: string) => void;
  onOpenPlayground: () => void;
  onFocusSearch: () => void;
};

export default function HomePage({ subjects, progressCounts, completedCount, totalLessons, onOpenSubject, onOpenPlayground, onFocusSearch }: Props) {
  const percent = totalLessons ? Math.round(completedCount / totalLessons * 100) : 0;
  return (
    <>
      <div className="breadcrumb">Workspace <span>/</span> Dashboard</div>
      <section className="hero">
        <div className="hero-orb" />
        <div className="hero-content">
          <div className="eyebrow"><span className="eyebrow-dot" /> YOUR PERSONAL LEARNING WORKSPACE</div>
          <h1>Less searching.<br /><span>More building.</span></h1>
          <p>Explore clear lessons, practice with interactive challenges, and build real skills in Go, Python, Markdown Shell scripting and GKE — all in one focused learning library.</p>
          <div className="hero-actions">
            <button className="button button-primary" onClick={() => onOpenSubject("go")}>Start learning <ArrowRight size={16} /></button>
            <button className="button button-glass" onClick={onOpenPlayground}><Code2 size={16} /> Try Markdown playground</button>
          </div>
          <div className="hero-note"><GraduationCap size={15} /> Learn at your pace. Progress stays saved in this browser.</div>
        </div>
        <div className="hero-illustration" aria-hidden="true">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="float-card float-card-one"><span className="mini-icon">{"{ }"}</span><span><b>Learn by doing</b><small>Concepts → practice</small></span></div>
          <div className="float-card float-card-two"><span className="check-bubble">✓</span><span><b>Small wins add up</b><small>Track your progress</small></span></div>
          <div className="code-window"><div className="window-dots"><i /><i /><i /></div><code><span>func</span> main() {'{'}<br />&nbsp;&nbsp;fmt.Println(<em>"keep learning"</em>)<br />{'}'}</code><div className="code-success">✓ &nbsp; concept unlocked</div></div>
        </div>
      </section>
      <section className="stats-grid">
        <div className="stat-card"><span className="stat-icon purple"><BookOpen size={18} /></span><div><strong>{subjects.length}</strong><small>Learning paths</small></div></div>
        <div className="stat-card"><span className="stat-icon mint"><Code2 size={18} /></span><div><strong>{totalLessons}</strong><small>Starter lessons</small></div></div>
        <div className="stat-card"><span className="stat-icon amber"><GraduationCap size={18} /></span><div><strong>{completedCount}</strong><small>Lessons completed</small></div></div>
      </section>
      <section className="section">
        <div className="section-heading"><div><div className="eyebrow dark">PICK YOUR NEXT SKILL</div><h2>Choose a learning path</h2><p>Structured from fundamentals to practical skills.</p></div><button className="text-button" onClick={onFocusSearch}><Search size={15} /> Find a topic</button></div>
        <div className="subject-grid">{subjects.map((subject) => {
          const count = progressCounts[subject.id] ?? { done: 0, total: 0 };
          return <SubjectCard key={subject.id} subject={subject} total={count.total} completed={count.done} onClick={() => onOpenSubject(subject.id)} />;
        })}</div>
      </section>
      <section className="section">
        <div className="section-heading"><div><div className="eyebrow dark">YOUR MOMENTUM</div><h2>Progress that feels good</h2><p>Keep moving one lesson at a time.</p></div><span className="percent-badge">{percent}% complete</span></div>
        <div className="progress-panel"><div className="progress-panel-top"><div><b>Overall learning progress</b><p>Completed lessons across all subjects</p></div><strong>{completedCount}<small> / {totalLessons}</small></strong></div><div className="progress-track"><span style={{ width: `${percent}%` }} /></div></div>
      </section>
      <footer className="footer"><span>Markbase Studio <span className="footer-dot">•</span> Independent learning library</span><span>Built to grow with your curiosity.</span></footer>
    </>
  );
}
