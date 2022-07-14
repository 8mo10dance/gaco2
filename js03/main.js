document.addEventListener("DOMContentLoaded", () => {
  const dispatch = attach(document.getElementById("list"));
  const addButton = document.getElementById("add-button");
  addButton.addEventListener("click", () => {
    dispatch(Action("ADD_ITEM"));
  });
  for (const btn of document.querySelectorAll("#list .js-delete-button")) {
    btn.addEventListener("click", (elem) => {
      const li = elem.target.closest("li");
      dispatch(Action("DELETE_ITEM", { id: li.dataset.id }));
    });
  }
});

const Action = (type, options = {}) => ({
  type,
  ...options,
});

const procs = {
  InsertInit: (attrs) => ({
    migrateTo: (el) => {
      console.log(`Insert ${attrs}`);
    },
  }),
  InsertBefore: (id, attrs) => ({
    migrateTo: (el) => {
      console.log(`Insert ${attrs} before ${id}`);
    },
  }),
  Remove: (id) => ({
    migrateTo: (el) => {
      console.log(`Remove ${id}`);
    },
  }),
  MoveUp: (id) => ({
    migrateTo: (el) => {
      console.log(`Move ${id} up`);
    },
  }),
  MoveDown: (id) => ({
    migrateTo: (el) => {
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
          procs.InsertInit({ ...action }).migrateTo(el);
          return;
        }

        procs.InsertBefore(1, { ...action }).migrateTo(el);
        for (const item of items) {
          procs.MoveDown(item.dataset.id, { ...action }).migrateTo(el);
        }
        return;
      case "DELETE_ITEM":
        procs.Remove(action.id).migrateTo(el);
        for (const item of items) {
          if (item.dataset.id > action.id) {
            procs.MoveUp(item.dataset.id).migrateTo(el);
          }
        }
        return;
      default:
        throw new Error(`Invalid ${action.type} action dispatched.`);
    }
  };

  return dispatch;
};
