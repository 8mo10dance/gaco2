"use client";

import { useState } from "react";
import { Task } from "../type";
import TaskFormComponent from "../components/TaskForm";

type Values = Partial<Task>;

export type Props = {
  defaultValues: Values;
  onSubmit: (values: Values) => void;
};

export default function TaskFormContainer({ defaultValues, onSubmit }: Props) {
  const [values, setValues] = useState<Values>(defaultValues);
  const handleChange = (
    attr: string,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    switch (attr) {
      case "title":
        const updater = (values: Values) => ({
          ...values,
          title: event.target.value,
        });
        setValues(updater);
        return;
    }
  };

  return (
    <TaskFormComponent
      values={values}
      onChange={handleChange}
      onSubmit={onSubmit}
    />
  );
}
