import TodoCard, { Todo } from "../ui/TodoCard";

export default function TodoList({ list }: { list: Todo[] }) {
  return (
    <div className="space-y-2 p-4">
      {list?.map((i) => (
        <TodoCard
          key={i.id}
          id={i.id}
          content={i.content}
          sourceComplete={i.sourceComplete}
        />
      ))}
    </div>
  );
}