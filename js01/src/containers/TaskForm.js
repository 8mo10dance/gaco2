import React, { useState } from "react";
import TaskFormComponent from "../components/TaskForm";

export default function TaskFormContainer({
  defaultValues = { title: "" },
  onSave = (values) => console.log(`save ${JSON.stringify(values)}`),
}) {
  const [values, setValues] = useState(defaultValues);
  const handleChange = (attrName) => (event) => {
    switch (attrName) {
      case "title":
        const updater = (values) => ({ ...values, title: event.target.value });
        setValues(updater);
        return;
    }
  };

  return (
    <TaskFormComponent
      values={values}
      onChange={handleChange}
      onSave={() => onSave(values)}
    />
  );
}
