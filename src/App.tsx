import { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import { subjects } from "./data/subjects";
import { lessons, findLesson, lessonsForSubject } from "./data/lessons";
import { useProgress } from "./hooks/useProgress";
import HomePage from "./pages/HomePage";
import CoursePage from "./pages/CoursePage";
import LessonPage from "./pages/LessonPage";
import PlaygroundPage from "./pages/PlaygroundPage";
import SearchPage from "./pages/SearchPage";
import type { PageState } from "./types";

export default function App() {
  const [page, setPage] = useState<PageState>({ type: "home" });
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const progress = useProgress();

  const progressCounts = useMemo(() => Object.fromEntries(subjects.map((subject) => {
    const subjectLessons = lessonsForSubject(subject.id);
    return [subject.id, { total: subjectLessons.length, done: subjectLessons.filter((lesson) => progress.isComplete(`${subject.id}/${lesson.id}`)).length }];
  })), [progress.progress]);

  function navigate(next: PageState) {
    setPage(next);
    setQuery("");
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function updateQuery(value: string) {
    setQuery(value);
    if (value.trim().length >= 2) setPage({ type: "search", query: value.trim() });
    else if (page.type === "search") setPage({ type: "home" });
  }

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "/" && !["INPUT", "TEXTAREA"].includes((document.activeElement as HTMLElement)?.tagName ?? "")) {
        event.preventDefault();
        document.querySelector<HTMLInputElement>(".search-box input")?.focus();
      }
      if (event.key === "Escape") {
        setQuery("");
        if (page.type === "search") setPage({ type: "home" });
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

  return <div className="app-shell">
    <TopBar query={query} onQueryChange={updateQuery} onHome={() => navigate({ type: "home" })} onMenu={() => setMenuOpen((open) => !open)} menuOpen={menuOpen} />
    <div className="app-body">
      <Sidebar subjects={subjects} page={page} progressCounts={progressCounts} onNavigate={navigate} open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main className="main-content" id="main-content">
        {page.type === "home" && <HomePage subjects={subjects} progressCounts={progressCounts} completedCount={progress.completedCount} totalLessons={totalLessons} onOpenSubject={(subjectId) => navigate({ type: "course", subjectId })} onOpenPlayground={() => navigate({ type: "playground" })} onFocusSearch={() => document.querySelector<HTMLInputElement>(".search-box input")?.focus()} />}
        {page.type === "course" && selectedSubject && <CoursePage subject={selectedSubject} lessons={selectedLessons} isComplete={progress.isComplete} onOpenLesson={(lessonId) => navigate({ type: "lesson", subjectId: selectedSubject.id, lessonId })} onHome={() => navigate({ type: "home" })} />}
        {page.type === "lesson" && selectedSubject && selectedLesson && <LessonPage subject={selectedSubject} lesson={selectedLesson} index={lessonIndex} total={selectedLessons.length} isComplete={progress.isComplete(`${selectedSubject.id}/${selectedLesson.id}`)} onComplete={() => { progress.markComplete(`${selectedSubject.id}/${selectedLesson.id}`); if (lessonIndex < selectedLessons.length - 1) navigate({ type: "lesson", subjectId: selectedSubject.id, lessonId: selectedLessons[lessonIndex + 1].id }); }} onPrevious={() => { if (lessonIndex > 0) navigate({ type: "lesson", subjectId: selectedSubject.id, lessonId: selectedLessons[lessonIndex - 1].id }); }} onNext={() => { if (lessonIndex < selectedLessons.length - 1) navigate({ type: "lesson", subjectId: selectedSubject.id, lessonId: selectedLessons[lessonIndex + 1].id }); }} onBack={() => navigate({ type: "course", subjectId: selectedSubject.id })} />}
        {page.type === "playground" && <PlaygroundPage onBack={() => navigate({ type: "home" })} />}
        {page.type === "search" && <SearchPage query={page.query} subjects={subjects} lessons={lessons} onOpenSubject={(subjectId) => navigate({ type: "course", subjectId })} onOpenLesson={(subjectId, lessonId) => navigate({ type: "lesson", subjectId, lessonId })} />}
        {!selectedSubject && page.type === "course" && <div className="empty-state"><Search size={24} /><b>Subject not found</b><button className="button button-primary" onClick={() => navigate({ type: "home" })}>Back to library</button></div>}
        {page.type === "lesson" && !selectedLesson && <div className="empty-state"><b>Lesson not found</b><button className="button button-primary" onClick={() => navigate({ type: "home" })}>Back to library</button></div>}
      </main>
    </div>
  </div>;
}
