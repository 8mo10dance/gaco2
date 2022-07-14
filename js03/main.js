document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("add-button");
  addButton.addEventListener("click", () => {
    dispatch(Action("ADD_ITEM"));
  });
  for (let btn of document.querySelectorAll("#list .js-edit-button")) {
    btn.addEventListener("click", (elem) => {
      const li = elem.target.closest("li");
      dispatch(
        Action("EDIT_ITEM", {
          id: li.dataset.id,
          value: li.querySelector("input").value,
        })
      );
    });
  }
  for (let btn of document.querySelectorAll("#list .js-delete-button")) {
    btn.addEventListener("click", (elem) => {
      dispatch(
        Action("DELETE_ITEM", { id: elem.target.closest("li").dataset.id })
      );
    });
  }
});

const Action = (type, options = {}) => ({
  type,
  ...options,
});

const dispatch = (action) => {
  console.log(action);
};
