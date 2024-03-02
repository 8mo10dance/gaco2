"use client";

import { useState } from "react";
import { Task } from "../type";
import TaskListComponent from "../components/TaskList";

export default function TaskListContainer() {
  const [tasks, setTasks] = useState<Task[]>([newTask()]);
  const handleAdd = () => {
    const updater = (tasks: Task[]) => tasks.concat([newTask()]);
    setTasks(updater);
  };

  return (
    <TaskListComponent
      tasks={tasks}
      onAdd={handleAdd}
      TaskComponent={TaskComponent}
    />
  );
}

function TaskComponent(task) {
  return <div>TODO</div>;
}

function newTask(): Task {
  return {
    uuid: crypto.randomUUID(),
    title: "",
  };
}
