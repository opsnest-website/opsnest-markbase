import { useCallback, useMemo, useState } from "react";

const STORAGE_KEY = "markbase.progress.v1";
type ProgressMap = Record<string, boolean>;

function readProgress(): ProgressMap {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "{}") as ProgressMap;
  } catch {
    return {};
  }
}

// Storage can throw (private browsing, quota exceeded, blocked site data);
// progress then lives only in memory for this visit.
function writeProgress(progress: ProgressMap) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // Ignore: in-memory state is still correct.
  }
}

function isProgressMap(value: unknown): value is ProgressMap {
  return typeof value === "object" && value !== null && !Array.isArray(value)
    && Object.values(value).every((done) => typeof done === "boolean");
}

export function useProgress() {
  const [progress, setProgress] = useState<ProgressMap>(readProgress);
  const toggle = useCallback((key: string) => {
    setProgress((current) => {
      const next = { ...current, [key]: !current[key] };
      writeProgress(next);
      return next;
    });
  }, []);
  const markComplete = useCallback((key: string) => {
    setProgress((current) => {
      const next = { ...current, [key]: true };
      writeProgress(next);
      return next;
    });
  }, []);
  /** Downloads progress as JSON so it can be moved to another browser or device. */
  const exportProgress = useCallback(() => {
    const blob = new Blob([JSON.stringify(progress, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "markbase-progress.json";
    link.click();
    URL.revokeObjectURL(url);
  }, [progress]);
  /** Merges a previously exported file into the current progress. Returns false if the file is invalid. */
  const importProgress = useCallback(async (file: File) => {
    let imported: unknown;
    try {
      imported = JSON.parse(await file.text());
    } catch {
      return false;
    }
    if (!isProgressMap(imported)) return false;
    setProgress((current) => {
      const next = { ...current, ...imported };
      writeProgress(next);
      return next;
    });
    return true;
  }, []);
  const completedCount = useMemo(() => Object.values(progress).filter(Boolean).length, [progress]);
  return { progress, toggle, markComplete, exportProgress, importProgress, completedCount, isComplete: (key: string) => Boolean(progress[key]) };
}
