import React from "react";
import Todo from "./Todo";

export default function TodoList() {
  return (
    <div>
      <button>Add</button>
      <ul>
        <li>
          <Todo />
        </li>
      </ul>
    </div>
  );
}
