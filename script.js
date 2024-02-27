const list = document.querySelector(".list");
const input = document.querySelector(".input");

document.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = input.value;
  if (!inputValue) {
    alert("Harus input value..!!");
    return;
  }
  const todoElement = document.createElement("li");
  const todoTittle = document.createElement("span");
  const actions = document.createElement("div");
  const buttonEdit = document.createElement("button");
  const buttonDelete = document.createElement("button");

  actions.classList.add("action");
  buttonEdit.classList.add("button");
  buttonDelete.classList.add("button");
  todoElement.classList.add("list__item");
  todoTittle.innerHTML = inputValue;
  buttonEdit.innerHTML = "Edit";
  buttonDelete.innerHTML = "Delete";

  actions.appendChild(buttonEdit);
  actions.appendChild(buttonDelete);
  todoElement.appendChild(todoTittle);
  todoElement.appendChild(actions);
  list.appendChild(todoElement);

  input.value = "";
});
