import { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import { subjects } from "./config/subjects";
import { lessons, findLesson, lessonsForSubject } from "./data/lessons";
import { useProgress } from "./hooks/useProgress";
import { hashToPage, pageToHash } from "./lib/routes";
import HomePage from "./pages/HomePage";
import CoursePage from "./pages/CoursePage";
import LessonPage from "./pages/LessonPage";
import PlaygroundPage from "./pages/PlaygroundPage";
import SearchPage from "./pages/SearchPage";
import type { PageState } from "./types";

export default function App() {
  const [page, setPage] = useState<PageState>(() => hashToPage(window.location.hash));
  const [query, setQuery] = useState(() => page.type === "search" ? page.query : "");
  const [menuOpen, setMenuOpen] = useState(false);
  const progress = useProgress();

  const progressCounts = useMemo(() => Object.fromEntries(subjects.map((subject) => {
    const subjectLessons = lessonsForSubject(subject.id);
    return [subject.id, { total: subjectLessons.length, done: subjectLessons.filter((lesson) => progress.isComplete(`${subject.id}/${lesson.id}`)).length }];
  })), [progress.progress]);

  /** Updates the URL and page together. `replace` avoids a history entry per search keystroke. */
  function go(next: PageState, replace = false) {
    const hash = pageToHash(next);
    if (replace) window.history.replaceState(null, "", hash);
    else if (hash !== window.location.hash) window.history.pushState(null, "", hash);
    setPage(next);
  }

  function navigate(next: PageState) {
    go(next);
    setQuery("");
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function updateQuery(value: string) {
    setQuery(value);
    if (value.trim().length >= 2) go({ type: "search", query: value.trim() }, page.type === "search");
    else if (page.type === "search") go({ type: "home" }, true);
  }

  // Back/forward buttons and hand-edited URLs.
  useEffect(() => {
    const onHistoryChange = () => {
      // In-page anchors such as #section are not routes.
      if (window.location.hash && !window.location.hash.startsWith("#/")) return;
      const next = hashToPage(window.location.hash);
      setPage(next);
      setQuery(next.type === "search" ? next.query : "");
      setMenuOpen(false);
    };
    window.addEventListener("popstate", onHistoryChange);
    window.addEventListener("hashchange", onHistoryChange);
    return () => {
      window.removeEventListener("popstate", onHistoryChange);
      window.removeEventListener("hashchange", onHistoryChange);
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "/" && !["INPUT", "TEXTAREA"].includes((document.activeElement as HTMLElement)?.tagName ?? "")) {
        event.preventDefault();
        document.querySelector<HTMLInputElement>(".search-box input")?.focus();
      }
      if (event.key === "Escape") {
        setQuery("");
        if (page.type === "search") go({ type: "home" }, true);
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [page.type]);

  const selectedSubject = "subjectId" in page ? subjects.find((subject) => subject.id === page.subjectId) : undefined;
  const selectedLessons = selectedSubject ? lessonsForSubject(selectedSubject.id) : [];
  const selectedLesson = page.type === "lesson" ? findLesson(page.subjectId, page.lessonId) : undefined;
  const lessonIndex = selectedLesson ? selectedLessons.findIndex((lesson) => lesson.id === selectedLesson.id) : -1;
  const totalLessons = lessons.length;

  const pageTitle = selectedLesson && selectedSubject ? `${selectedLesson.title} · ${selectedSubject.name}`
    : selectedSubject ? selectedSubject.name
    : page.type === "playground" ? "Markdown playground"
    : page.type === "search" ? `Search: ${page.query}`
    : "";
  useEffect(() => {
    document.title = pageTitle ? `${pageTitle} — Markbase` : "Markbase — Learning Studio";
  }, [pageTitle]);

  return <div className="app-shell">
    <TopBar query={query} onQueryChange={updateQuery} onHome={() => navigate({ type: "home" })} onMenu={() => setMenuOpen((open) => !open)} menuOpen={menuOpen} />
    <div className="app-body">
      <Sidebar subjects={subjects} page={page} progressCounts={progressCounts} onNavigate={navigate} open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main className="main-content" id="main-content">
        {page.type === "home" && <HomePage subjects={subjects} progressCounts={progressCounts} completedCount={progress.completedCount} totalLessons={totalLessons} onExportProgress={progress.exportProgress} onImportProgress={progress.importProgress} onOpenSubject={(subjectId) => navigate({ type: "course", subjectId })} onOpenPlayground={() => navigate({ type: "playground" })} onFocusSearch={() => document.querySelector<HTMLInputElement>(".search-box input")?.focus()} />}
        {page.type === "course" && selectedSubject && <CoursePage subject={selectedSubject} lessons={selectedLessons} isComplete={progress.isComplete} onOpenLesson={(lessonId) => navigate({ type: "lesson", subjectId: selectedSubject.id, lessonId })} onHome={() => navigate({ type: "home" })} />}
        {page.type === "lesson" && selectedSubject && selectedLesson && <LessonPage key={`${selectedSubject.id}/${selectedLesson.id}`} subject={selectedSubject} lesson={selectedLesson} index={lessonIndex} total={selectedLessons.length} isComplete={progress.isComplete(`${selectedSubject.id}/${selectedLesson.id}`)} onComplete={() => { progress.markComplete(`${selectedSubject.id}/${selectedLesson.id}`); if (lessonIndex < selectedLessons.length - 1) navigate({ type: "lesson", subjectId: selectedSubject.id, lessonId: selectedLessons[lessonIndex + 1].id }); }} onPrevious={() => { if (lessonIndex > 0) navigate({ type: "lesson", subjectId: selectedSubject.id, lessonId: selectedLessons[lessonIndex - 1].id }); }} onNext={() => { if (lessonIndex < selectedLessons.length - 1) navigate({ type: "lesson", subjectId: selectedSubject.id, lessonId: selectedLessons[lessonIndex + 1].id }); }} onBack={() => navigate({ type: "course", subjectId: selectedSubject.id })} />}
        {page.type === "playground" && <PlaygroundPage onBack={() => navigate({ type: "home" })} />}
        {page.type === "search" && <SearchPage query={page.query} subjects={subjects} lessons={lessons} onOpenSubject={(subjectId) => navigate({ type: "course", subjectId })} onOpenLesson={(subjectId, lessonId) => navigate({ type: "lesson", subjectId, lessonId })} />}
        {!selectedSubject && page.type === "course" && <div className="empty-state"><Search size={24} /><b>Subject not found</b><button className="button button-primary" onClick={() => navigate({ type: "home" })}>Back to library</button></div>}
        {page.type === "lesson" && !selectedLesson && <div className="empty-state"><b>Lesson not found</b><button className="button button-primary" onClick={() => navigate({ type: "home" })}>Back to library</button></div>}
      </main>
    </div>
  </div>;
}
