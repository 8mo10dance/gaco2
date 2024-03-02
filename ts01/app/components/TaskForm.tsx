"use client";

import { Task } from "../type";

type Values = Partial<Task>;

export type Props = {
  values: Values;
  onChange: (attr: string, event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (values: Values) => void;
};

export default function TaskFormComponent({
  values,
  onChange,
  onSubmit,
}: Props) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(values);
      }}
    >
      <div>
        <label htmlFor="title">タイトル</label>
        <input
          id="title"
          type="text"
          value={values.title}
          onChange={(event) => onChange("title", event)}
        />
      </div>
      <div>
        <input type="submit" />
      </div>
    </form>
  );
}
