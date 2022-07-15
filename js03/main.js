document.addEventListener("DOMContentLoaded", () => {
  getAddButton().addEventListener("click", () => {
    popItem();
  });
});

const getAddButton = () => document.getElementById("js-add-button");

const popItem = () => {
  const list = document.getElementById("js-list");
  const items = list.querySelectorAll("li");
  const newItem = createItem(1);
  if (items.length === 0) {
    insertInit(list, newItem);
    return;
  }

  insertBefore(list, newItem, items[0]);
  for (const item of items) {
    moveDown(item);
  }
};

const insertInit = (target, el) => {
  target.appendChild(el);
};

const insertBefore = (parent, el, target) => {
  parent.insertBefore(el, target);
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

const moveDown = (target) => {
  target.setAttribute("data-id", Number(target.dataset.id) + 1);
};
