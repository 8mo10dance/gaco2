"use client";

import { Task } from "../type";

export type Props = {
  tasks: Task[];
  onAdd: () => void;
  isEditing: (uuid: string) => boolean;
  TaskComponent: React.FC<Task>;
  TaskFormComponent: React.FC<Task>;
};

export default function TaskListComponent({
  tasks,
  isEditing,
  onAdd,
  TaskComponent,
  TaskFormComponent,
}: Props) {
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.uuid}>
            {isEditing(task.uuid) ? (
              <TaskFormComponent {...task} />
            ) : (
              <TaskComponent {...task} />
            )}
          </li>
        ))}
      </ul>
      <div>
        <button onClick={onAdd}>追加</button>
      </div>
    </div>
  );
}
