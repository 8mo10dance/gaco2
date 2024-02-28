import React from "react";
import TaskComponent from "./Task";
import TaskFormComponent from "./TaskForm";

export default function TaskList({
  tasks = [{ uuid: "dummy", title: "" }],
  onAdd = () => console.log("add"),
  ItemComponent = TaskComponent,
  FormComponent = TaskFormComponent,
  isEditing = (task) => false,
}) {
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.uuid}>
            {isEditing(task) ? (
              <FormComponent defaultValues={task} />
            ) : (
              <ItemComponent {...task} />
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
