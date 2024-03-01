import React, { useState } from "react";
import TaskListComponent from "../components/TaskList";
import TaskComponent from "../components/Task";
import TaskFormComponent from "./TaskForm";

export default function TaskListContainer() {
  const [tasks, setTasks] = useState([newTask()]);
  const [editingTaskUuid, setEditingTaskUuid] = useState(null);
  const isEditing = (task) => task.uuid === editingTaskUuid;
  const handleAdd = () => {
    const task = newTask();
    setTasks((tasks) => tasks.concat([task]));
    setEditingTaskUuid(task.uuid);
  };
  const handleEdit = (task) => () => {
    setEditingTaskUuid(task.uuid);
  };
  const handleRemove = (task) => () => console.log(`remove ${task.uuid}`);
  const handleSave = (uuid) => (values) => {
    const updater = (tasks) =>
      tasks.map((task) => (task.uuid === uuid ? { ...task, ...values } : task));
    setTasks(updater);
    setEditingTaskUuid(null);
  };

  return (
    <TaskListComponent
      tasks={tasks}
      isEditing={isEditing}
      onAdd={handleAdd}
      ItemComponent={(task) => (
        <TaskComponent
          {...task}
          onEdit={handleEdit(task)}
          onRemove={handleRemove(task)}
        />
      )}
      FormComponent={(task) => (
        <TaskFormComponent
          defaultValues={task}
          onSave={handleSave(task.uuid)}
        />
      )}
    />
  );
}

function newTask() {
  return {
    uuid: crypto.randomUUID(),
    title: "",
  };
}
