"use client";

import { useState } from "react";
import { Task } from "../type";
import TaskListComponent from "../components/TaskList";
import TaskComponent from "../components/Task";

export default function TaskListContainer() {
  const [tasks, setTasks] = useState<Task[]>([newTask()]);
  const handleAdd = () => {
    const updater = (tasks: Task[]) => tasks.concat([newTask()]);
    setTasks(updater);
  };
  const handleEdit = (uuid: string) => console.log(`edit ${uuid}`);
  const handleRemove = (uuid: string) => {
    const updater = (tasks: Task[]) =>
      tasks.filter((task) => task.uuid !== uuid);
    setTasks(updater);
  };

  return (
    <TaskListComponent
      tasks={tasks}
      onAdd={handleAdd}
      TaskComponent={(task) => (
        <TaskComponent
          {...task}
          onEdit={() => handleEdit(task.uuid)}
          onRemove={() => handleRemove(task.uuid)}
        />
      )}
    />
  );
}

function newTask(): Task {
  return {
    uuid: crypto.randomUUID(),
    title: "",
  };
}
