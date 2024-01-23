import React from "react";

export default function Todo({
  value = "",
  onChange = (e) => console.log(e.target.value),
  onRemove = () => console.log("remove"),
}) {
  return (
    <div>
      <input type="text" value={value} onChange={onChange} />
      <button onClick={onRemove}>Remove</button>
    </div>
  );
}
