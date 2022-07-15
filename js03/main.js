document.addEventListener("DOMContentLoaded", () => {
  getAddButton().addEventListener("click", () => {
    popItem();
  });
});

const getAddButton = () => document.getElementById("js-add-button");

const popItem = () => {
  const listEl = document.getElementById("js-list");
  const list = List(listEl);
  const itemEls = listEl.querySelectorAll("li");
  const newItem = createItem(1);
  if (itemEls.length === 0) {
    list.insertInit(newItem);
    return;
  }

  list.insertBefore(newItem, itemEls[0]);
  for (const el of itemEls) {
    const item = Item(el);
    item.moveDown();
  }
};

const List = (listEl) => ({
  insertInit: (newEl) => {
    listEl.appendChild(newEl);
  },
  insertBefore: (newEl, targetEl) => {
    listEl.insertBefore(newEl, targetEl);
  },
});

const Item = (itemEl) => ({
  moveDown: () => {
    itemEl.setAttribute("data-id", Number(itemEl.dataset.id) + 1);
  },
});

const createItem = (id) => {
  const li = document.createElement("li");
  li.setAttribute("data-id", id);
  const input = document
    .getElementById("js-item-template")
    .content.cloneNode(true);
  li.appendChild(input);
  return li;
};
