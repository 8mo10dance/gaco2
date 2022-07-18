import { v4 as uuid } from "uuid";

document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("js-app");
  const list = app.querySelector(".js-list");

  const createNewItem = () => {
    const template = app.querySelector(".js-field_template");
    const field = template.content.cloneNode(true);
    const deleteButton = field.querySelector(".js-delete_button");
    deleteButton.onclick = (event) => {
      const target = event.target.closest("li");
      list.removeChild(target);
    };
    const li = document.createElement("li");
    li.setAttribute("data-uuid", uuid());
    li.appendChild(field);
    return li;
  };

  const addButton = app.querySelector(".js-add_button");
  addButton.onclick = () => {
    const items = list.querySelectorAll("li");
    const newItem = createNewItem();
    if (items.length === 0) {
      list.appendChild(newItem);
      return;
    }

    list.insertBefore(newItem, items[0]);
  };
});
