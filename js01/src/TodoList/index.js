import React from "react";
import Todo from "./Todo";
import useTodoList from "./useTodoList";

export default function TodoList() {
  const _TodoList = useTodoList();

  return (
    <div>
      <button onClick={_TodoList.add}>Add</button>
      <ul>
        {_TodoList.items.map((item) => (
          <li key={item.uuid}>
            <Todo
              value={item.value}
              onChange={(e) => _TodoList.edit(item.uuid, e.target.value)}
              onRemove={() => _TodoList.remove(item.uuid)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
