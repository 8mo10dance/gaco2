import { useState } from "react";

export default function useTodoList() {
  const [items, setItems] = useState([]);

  return {
    items,
    add: () => {
      setItems((its) => its.concat([{ uuid: crypto.randomUUID(), value: "" }]));
    },
    edit: (uuid, value) => {
      setItems((its) =>
        its.map((it) => (it.uuid === uuid ? { ...it, value } : it)),
      );
    },
    remove: (uuid) => {
      setItems((its) => its.filter((it) => it.uuid !== uuid));
    },
  };
}
