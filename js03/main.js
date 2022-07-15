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
    console.log("insert init");
    return;
  }

  console.log("insert before 1");
  for (const item of items) {
    console.log(`move ${item.dataset.id} down`);
  }
};
