document.addEventListener("DOMContentLoaded", () => {
  getAddButton().addEventListener("click", () => {
    popItem();
  });
});

const getAddButton = () => document.getElementById("js-add-button");

const popItem = () => {
  const list = document.getElementById("js-list");
  const items = list.querySelectorAll("li");
  if (items.length === 0) {
    const newItem = createItem(1);
    insertInit(list, newItem);
    return;
  }

  console.log("insert before 1");
  for (const item of items) {
    console.log(`move ${item.dataset.id} down`);
  }
};

const insertInit = (target, el) => {
  target.appendChild(el);
};

const createItem = (id) => {
  const li = document.createElement("li");
  li.setAttribute("data-id", id);
  const input = document
    .getElementById("js-item-template")
    .content.cloneNode(true);
  li.appendChild(input);
  return li;
};
