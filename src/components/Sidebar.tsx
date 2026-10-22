import { BookOpen, Code2, FileText, Home, Terminal } from "lucide-react";
import type { PageState, Subject } from "../types";

type Props = {
  subjects: Subject[];
  page: PageState;
  progressCounts: Record<string, { done: number; total: number }>;
  onNavigate: (page: PageState) => void;
  open: boolean;
  onClose: () => void;
};

export default function Sidebar({ subjects, page, progressCounts, onNavigate, open, onClose }: Props) {
  const activeSubject = "subjectId" in page ? page.subjectId : "";
  const activeHome = page.type === "home";
  const activePlay = page.type === "playground";
  const icons = [Code2, Code2, FileText, Terminal];
  return (
    <>
      {open && <button className="mobile-scrim" aria-label="Close navigation" onClick={onClose} />}
      <aside className={`sidebar ${open ? "sidebar-open" : ""}`}>
        <div className="side-label">Workspace</div>
        <button className={`nav-item ${activeHome ? "active" : ""}`} onClick={() => { onNavigate({ type: "home" }); onClose(); }}>
          <span className="nav-icon"><Home size={16} /></span> Learning dashboard
        </button>
        <button className={`nav-item ${activePlay ? "active" : ""}`} onClick={() => { onNavigate({ type: "playground" }); onClose(); }}>
          <span className="nav-icon"><FileText size={16} /></span> Markdown playground
        </button>
        <div className="side-label">Learning paths</div>
        {subjects.map((subject, index) => {
          const Icon = icons[index] ?? BookOpen;
          const counts = progressCounts[subject.id] ?? { done: 0, total: 0 };
          return (
            <button key={subject.id} className={`nav-item ${activeSubject === subject.id ? "active" : ""}`} onClick={() => { onNavigate({ type: "course", subjectId: subject.id }); onClose(); }}>
              <span className={`nav-icon ${subject.className}`}><Icon size={16} /></span>
              <span className="nav-text">{subject.name}</span>
              <span className="nav-count">{counts.done}/{counts.total}</span>
            </button>
          );
        })}
        <div className="sidebar-tip">
          <b><BookOpen size={14} /> Learning tip</b>
          <p>Read a concept, test your understanding, then mark the lesson complete.</p>
        </div>
      </aside>
    </>
  );
}
