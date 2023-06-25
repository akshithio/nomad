import { useState } from "react";

export interface Todo {
  content: string;
  sourceComplete: boolean;
}

export default function TodoCard({ content, sourceComplete }: Todo) {
  const [completed, setCompleted] = useState(sourceComplete);
  return (
    <div className="space-x-2 rounded-lg bg-neutral-100 px-12 py-4">
      <input
        type="checkbox"
        className="border-neutral-400"
        checked={completed}
        onClick={(i) => {
          setCompleted(i.currentTarget.checked);
        }}
      />
      <span className={completed ? "line-through" : ""}>{content}</span>
    </div>
  );
}
