import type { PageState } from "../types";

// Hash-based URLs work on static hosting (GitHub Pages under /learn/) without server rewrites:
//   #/                         home
//   #/course/<subject>         course overview
//   #/course/<subject>/<id>    lesson
//   #/playground               Markdown playground
//   #/search?q=<query>         search results

export function pageToHash(page: PageState): string {
  switch (page.type) {
    case "home": return "#/";
    case "course": return `#/course/${encodeURIComponent(page.subjectId)}`;
    case "lesson": return `#/course/${encodeURIComponent(page.subjectId)}/${encodeURIComponent(page.lessonId)}`;
    case "playground": return "#/playground";
    case "search": return `#/search?q=${encodeURIComponent(page.query)}`;
  }
}

export function hashToPage(hash: string): PageState {
  const [route, queryString = ""] = hash.replace(/^#\/?/, "").split("?");
  const parts = route.split("/").filter(Boolean).map((part) => {
    try { return decodeURIComponent(part); } catch { return part; }
  });
  if (parts[0] === "course" && parts.length === 2) return { type: "course", subjectId: parts[1] };
  if (parts[0] === "course" && parts.length === 3) return { type: "lesson", subjectId: parts[1], lessonId: parts[2] };
  if (parts[0] === "playground") return { type: "playground" };
  if (parts[0] === "search") {
    const query = new URLSearchParams(queryString).get("q")?.trim() ?? "";
    if (query) return { type: "search", query };
  }
  return { type: "home" };
}
