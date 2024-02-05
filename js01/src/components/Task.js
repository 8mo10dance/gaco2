import React from "react";

export default function TaskView({
  title = "",
  onEdit = () => {
    console.log("edit");
  },
  onRemove = () => {
    console.log("remove");
  },
}) {
  return (
    <div>
      <h3>{title}</h3>
      <div>
        <button onClick={onEdit}>編集</button>
        <button onClick={onRemove}>削除</button>
      </div>
    </div>
  );
}
