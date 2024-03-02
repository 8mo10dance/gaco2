"use client";

import { useState } from "react";
import { Task } from "../type";
import TaskListComponent from "../components/TaskList";
import TaskComponent from "../components/Task";
import TaskFormContainer from "./TaskForm";

type Values = Partial<Task>;

export default function TaskListContainer() {
  const [tasks, setTasks] = useState<Task[]>([newTask()]);
  const [editingTaskUuid, setEditingTaskUuid] = useState("");
  const isEditing = (uuid: string) => uuid === editingTaskUuid;
  const handleAdd = () => {
    const task = newTask();
    const updater = (tasks: Task[]) => tasks.concat([task]);
    setTasks(updater);
    setEditingTaskUuid(task.uuid);
  };
  const handleEdit = (uuid: string) => {
    setEditingTaskUuid(uuid);
  };
  const handleRemove = (uuid: string) => {
    const updater = (tasks: Task[]) =>
      tasks.filter((task) => task.uuid !== uuid);
    setTasks(updater);
  };
  const handleSubmit = (uuid: string, values: Values) => {
    const updater = (tasks: Task[]) =>
      tasks.map((task) => (task.uuid === uuid ? { ...task, ...values } : task));
    setTasks(updater);
    setEditingTaskUuid("");
  };

  return (
    <TaskListComponent
      tasks={tasks}
      onAdd={handleAdd}
      isEditing={isEditing}
      TaskComponent={(task) => (
        <TaskComponent
          {...task}
          onEdit={() => handleEdit(task.uuid)}
          onRemove={() => handleRemove(task.uuid)}
        />
      )}
      TaskFormComponent={(task) => (
        <TaskFormContainer
          defaultValues={task}
          onSubmit={(values) => handleSubmit(task.uuid, values)}
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
