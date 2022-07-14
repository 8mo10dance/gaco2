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
      el.appendChild(Item(1, attrs));
    },
  }),
  InsertBefore: (id, attrs) => ({
    migrateTo: (el) => {
      const target = el.querySelector(`li[data-id="${id}"]`);
      el.insertBefore(Item(id, attrs), target);
    },
  }),
  Remove: (id) => ({
    migrateTo: (el) => {
      const target = el.querySelector(`li[data-id="${id}"]`);
      el.removeChild(target);
    },
  }),
  MoveUp: (id) => ({
    migrateTo: (el) => {
      const target = el.querySelector(`li[data-id="${id}"]`);
      target.setAttribute("data-id", Number(id) - 1);
    },
  }),
  MoveDown: (id) => ({
    migrateTo: (el) => {
      const target = el.querySelector(`li[data-id="${id}"]`);
      target.setAttribute("data-id", Number(id) + 1);
    },
  }),
};

const Item = (id, attrs) => {
  const li = document.createElement("li");
  li.setAttribute("data-id", id);
  li.appendChild(
    (() => {
      const input = document.createElement("input");
      input.value = attrs["value"] || "";
      return input;
    })()
  );
  li.appendChild(
    (() => {
      const btn = document.createElement("button");
      btn.setAttribute("class", "js-edit-button");
      btn.innerHTML = "edit";
      return btn;
    })()
  );
  li.appendChild(
    (() => {
      const btn = document.createElement("button");
      btn.setAttribute("class", "js-delete-button");
      btn.innerHTML = "delete";
      return btn;
    })()
  );

  return li;
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
