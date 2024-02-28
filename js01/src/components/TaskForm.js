import React, { useState } from "react";

export default function TaskFormComponent({
  values = { title: "" },
  onChange = (attrName) => (event) =>
    console.log(`change to ${event.target.value}`),
  onSave = () => console.log("save"),
}) {
  return (
    <div>
      <div>
        <input type="text" value={values.title} onChange={onChange("title")} />
      </div>
      <div>
        <button onClick={onSave}>保存</button>
      </div>
    </div>
  );
}
