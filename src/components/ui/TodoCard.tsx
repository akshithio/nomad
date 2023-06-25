import { useState } from "react";

export interface Todo {
  content: string;
  sourceComplete: boolean;
}

export default function TodoCard({ content, sourceComplete }: Todo) {
  const [completed, setCompleted] = useState(sourceComplete);
  return (
    <div className="space-x-2 rounded-md bg-neutral-100 px-6 py-4">
      <input
        type="checkbox"
        className="border-neutral-400"
        checked={completed}
        onClick={(i) => {
          setCompleted(i.currentTarget.checked);
        }}
      />
      <span className={completed ? "line-through font-cal text-lg" : "font-cal text-lg"}>{content}</span>
    </div>
  );
}
