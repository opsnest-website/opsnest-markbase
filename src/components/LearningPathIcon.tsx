import {
  BookOpen,
  Code2,
  FileText,
  Terminal,
  Cloud,
  type LucideIcon,
} from "lucide-react";

import type { Subject } from "../types";

const iconRegistry: Record<string, LucideIcon> = {
  "book-open": BookOpen,
  code: Code2,
  "file-text": FileText,
  terminal: Terminal,
  cloud: Cloud,
};

type Props = {
  subject: Subject;
  size?: number;
};

export default function LearningPathIcon({
  subject,
  size = 16,
}: Props) {
  const Icon = subject.icon
    ? iconRegistry[subject.icon] ?? BookOpen
    : BookOpen;

  return <Icon size={size} aria-hidden="true" />;
}