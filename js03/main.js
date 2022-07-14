document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("add-button");
  addButton.addEventListener("click", () => {
    console.log("hoge");
  });
  const editButtons = document.querySelectorAll("#list .js-edit-button");
  for (let b of editButtons) {
    b.addEventListener("click", (e) => {
      console.log(e.target.closest("li").dataset.id);
    });
  }
});
