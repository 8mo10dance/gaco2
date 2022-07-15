document.addEventListener("DOMContentLoaded", () => {
  getAddButton().addEventListener("click", () => {
    popItem();
  });
});

const getAddButton = () => document.getElementById("js-add-button");

const popItem = () => {
  console.log("pop new item");
};
