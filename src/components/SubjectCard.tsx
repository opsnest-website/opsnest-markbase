import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import type { Subject } from "../types";

type Props = { subject: Subject; total: number; completed: number; onClick: () => void };

export default function SubjectCard({ subject, total, completed, onClick }: Props) {
  const percent = total ? Math.round((completed / total) * 100) : 0;
  return (
    <button className="subject-card" onClick={onClick}>
      <div className="card-top">
        <span className={`subject-symbol ${subject.className}`}>{subject.symbol}</span>
        <span className="level-pill">{subject.level}</span>
      </div>
      <h3>{subject.name}</h3>
      <p>{subject.description}</p>
      <div className="chip-row"><span className="chip">{total} modules</span><span className="chip">{completed} completed</span></div>
      <div className="card-progress"><span style={{ width: `${percent}%` }} /></div>
      <div className="card-footer"><span>{percent === 100 ? <><CheckCircle2 size={14} /> Path completed</> : "Explore learning path"}</span><ArrowUpRight size={17} /></div>
    </button>
  );
}
