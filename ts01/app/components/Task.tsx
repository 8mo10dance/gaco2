"use client";

import { Task } from "../type";

export type Props = Task & {
  onEdit: () => void;
  onRemove: () => void;
};

export default function TaskComponent({ onEdit, onRemove, ...task }: Props) {
  return (
    <div>
      <p>{task.title}</p>
      <div>
        <button onClick={onEdit}>編集</button>
        <button onClick={onRemove}>削除</button>
      </div>
    </div>
  );
}
