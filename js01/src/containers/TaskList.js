import React from "react";
import TaskListComponent from "../components/TaskList";
import TaskComponent from "../components/Task";

export default function TaskListContainer() {
  const tasks = [newTask()];
  const handleAdd = () => console.log("add");
  const handleEdit = (task) => () => console.log(`edit ${task.uuid}`);
  const handleRemove = (task) => () => console.log(`remove ${task.uuid}`);

  return (
    <TaskListComponent
      tasks={tasks}
      onAdd={handleAdd}
      ItemComponent={(task) => (
        <TaskComponent
          {...task}
          onEdit={handleEdit(task)}
          onRemove={handleRemove(task)}
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
