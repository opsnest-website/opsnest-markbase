import {
  BookOpen,
  Code2,
  FileText,
  Home,
  Terminal,
  Cloud,
  type LucideIcon,
} from "lucide-react";

import type { PageState, Subject } from "../types";

type Props = {
  subjects: Subject[];
  page: PageState;
  progressCounts: Record<string, { done: number; total: number }>;
  onNavigate: (page: PageState) => void;
  open: boolean;
  onClose: () => void;
};

/**
 * Central icon registry.
 *
 * Icons are resolved using subject.id, never the subject's array position.
 * Add a mapping here only when a learning path needs a new icon.
 */
const subjectIcons: Record<string, LucideIcon> = {
  shell: Terminal,
  markdown: FileText,
  python: Code2,
  go: Terminal,
  gke: Cloud,
};

function LearningPathIcon({ subjectId }: { subjectId: string }) {
  const Icon = subjectIcons[subjectId] ?? BookOpen;

  return <Icon size={16} aria-hidden="true" />;
}

export default function Sidebar({
  subjects,
  page,
  progressCounts,
  onNavigate,
  open,
  onClose,
}: Props) {
  const activeSubject = "subjectId" in page ? page.subjectId : "";
  const activeHome = page.type === "home";
  const activePlay = page.type === "playground";

  return (
    <>
      {open && (
        <button
          type="button"
          className="mobile-scrim"
          aria-label="Close navigation"
          onClick={onClose}
        />
      )}

      <aside className={`sidebar ${open ? "sidebar-open" : ""}`}>
        {/* Workspace navigation */}
        <div className="side-label">Workspace</div>

        <button
          type="button"
          className={`nav-item ${activeHome ? "active" : ""}`}
          aria-current={activeHome ? "page" : undefined}
          onClick={() => {
            onNavigate({ type: "home" });
            onClose();
          }}
        >
          <span className="nav-icon">
            <Home size={16} aria-hidden="true" />
          </span>

          <span className="nav-text">Learning dashboard</span>
        </button>

        <button
          type="button"
          className={`nav-item ${activePlay ? "active" : ""}`}
          aria-current={activePlay ? "page" : undefined}
          onClick={() => {
            onNavigate({ type: "playground" });
            onClose();
          }}
        >
          <span className="nav-icon">
            <FileText size={16} aria-hidden="true" />
          </span>

          <span className="nav-text">Markdown playground</span>
        </button>

        {/* Learning paths */}
        <div className="side-label">Learning paths</div>

        {subjects.map((subject) => {
          const isActive = activeSubject === subject.id;

          const counts = progressCounts[subject.id] ?? {
            done: 0,
            total: 0,
          };

          return (
            <button
              type="button"
              key={subject.id}
              className={`nav-item ${isActive ? "active" : ""}`}
              aria-current={isActive ? "page" : undefined}
              onClick={() => {
                onNavigate({
                  type: "course",
                  subjectId: subject.id,
                });

                onClose();
              }}
            >
              <span className={`nav-icon ${subject.className}`}>
                <LearningPathIcon subjectId={subject.id} />
              </span>

              <span className="nav-text">{subject.name}</span>

              <span className="nav-count">
                {counts.done}/{counts.total}
              </span>
            </button>
          );
        })}

        {/* Learning tip */}
        <div className="sidebar-tip">
          <b>
            <BookOpen size={14} aria-hidden="true" />
            Learning tip
          </b>

          <p>
            Read a concept, test your understanding, then mark the lesson
            complete.
          </p>
        </div>
      </aside>
    </>
  );
}