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

export function useProgress() {
  const [progress, setProgress] = useState<ProgressMap>(readProgress);
  const toggle = useCallback((key: string) => {
    setProgress((current) => {
      const next = { ...current, [key]: !current[key] };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);
  const markComplete = useCallback((key: string) => {
    setProgress((current) => {
      const next = { ...current, [key]: true };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);
  const completedCount = useMemo(() => Object.values(progress).filter(Boolean).length, [progress]);
  return { progress, toggle, markComplete, completedCount, isComplete: (key: string) => Boolean(progress[key]) };
}
