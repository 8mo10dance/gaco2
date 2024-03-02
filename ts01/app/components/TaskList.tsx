"use client";

import { Task } from "../type";

export type Props = {
  tasks: Task[];
  onAdd: () => void;
  TaskComponent: React.FC<Task>;
};

export default function TaskListComponent({
  tasks,
  onAdd,
  TaskComponent,
}: Props) {
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.uuid}>
            <TaskComponent {...task} />
          </li>
        ))}
      </ul>
      <div>
        <button onClick={onAdd}>追加</button>
      </div>
    </div>
  );
}
