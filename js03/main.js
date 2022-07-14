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
  InsertInit: (attrs) => ({
    executeOn: (el) => {
      console.log(`Insert ${attrs}`);
    },
  }),
  InsertBefore: (id, attrs) => ({
    executeOn: (el) => {
      console.log(`Insert ${attrs} before ${id}`);
    },
  }),
  SetAttributesTo: (id, attrs) => ({
    executeOn: (el) => {
      console.log(`Set ${attrs} to ${id}`);
    },
  }),
  Remove: (id) => ({
    executeOn: (el) => {
      console.log(`Remove ${id}`);
    },
  }),
  MoveUp: (id) => ({
    executeOn: (el) => {
      console.log(`Move ${id} up`);
    },
  }),
  MoveDown: (id) => ({
    executeOn: (el) => {
      console.log(`Move ${id} down`);
    },
  }),
};

const attach = (el) => {
  const items = el.querySelectorAll("li");
  const dispatch = (action) => {
    switch (action.type) {
      case "ADD_ITEM":
        if (items == null) {
          procs.InsertInit({ ...action }).executeOn(el);
          return;
        }

        procs.InsertBefore(1, { ...action }).executeOn(el);
        for (const item of items) {
          procs.MoveDown(item.dataset.id, { ...action }).executeOn(el);
        }
        return;
      case "EDIT_ITEM":
        procs.SetAttributesTo(action.id, { ...action }).executeOn(el);
        return;
      case "DELETE_ITEM":
        procs.Remove(action.id).executeOn(el);
        for (const item of items) {
          if (item.dataset.id > action.id) {
            procs.MoveUp(item.dataset.id).executeOn(el);
          }
        }
        return;
      default:
        throw new Error(`Invalid ${action.type} action dispatched.`);
    }
  };

  return dispatch;
};
