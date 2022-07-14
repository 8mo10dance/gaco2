document.addEventListener("DOMContentLoaded", () => {
  const dispatch = attach(document.getElementById("list"));
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

const procs = {
  Pop: (attrs) => ({
    executeOn: (el) => {
      console.log(`Pop ${attrs}`);
    },
  }),
  SetTo: (id, attrs) => ({
    executeOn: (el) => {
      console.log(`Set ${attrs} to ${id}`);
    },
  }),
  Delete: (id) => ({
    executeOn: (el) => {
      console.log(`Delete ${id}`);
    },
  }),
};

const attach = (el) => (action) => {
  switch (action.type) {
    case "ADD_ITEM":
      [procs.Pop({ ...action })].forEach((proc) => {
        proc.executeOn(el);
      });
      return;
    case "EDIT_ITEM":
      [procs.SetTo(action.id, { ...action })].forEach((proc) => {
        proc.executeOn(el);
      });
      return;
    case "DELETE_ITEM":
      [procs.Delete(action.id)].forEach((proc) => {
        proc.executeOn(el);
      });
      return;
    default:
      throw new Error(`Invalid ${action.type} action dispatched.`);
  }
};
