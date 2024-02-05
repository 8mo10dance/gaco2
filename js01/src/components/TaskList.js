import React from "react";
import TaskComponent from "./Task";

export default function TaskList({
  tasks = [{ uuid: "dummy", title: "" }],
  onAdd = () => console.log("add"),
  ItemComponent = TaskComponent,
}) {
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.uuid}>
            <ItemComponent {...task} />
          </li>
        ))}
      </ul>
      <div>
        <button onClick={onAdd}>追加</button>
      </div>
    </div>
  );
}
