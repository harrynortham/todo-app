import { showTodos, createTodo } from "./todos.js";
import { updateDisplay } from "./display.js";

//we will change this to session storage that both modules can access
window.lists = [];

function list(title) {
  return {
    title,
    todos: [],
  };
}

function createList(listTitle) {
  const newlist = list(listTitle);
  lists.push(newlist);
  updateDisplay();
  console.log(lists);
}

function showLists(lists, container) {
  lists.forEach((list) => {
    const div = document.createElement("div");
    div.classList.add("list");
    const h4 = document.createElement("H4");
    div.appendChild(h4);
    const textnode = document.createTextNode(list.title);
    h4.appendChild(textnode);

    //add the todos to the div
    let todoList = showTodos(list.todos);
    div.appendChild(todoList);

    const button = document.createElement("button");
    button.textContent = "New item";
    button.addEventListener("click", () => {
      createTodo({ title: "New task" }, list.title);
    });
    div.appendChild(button);

    container.appendChild(div);
  });
}

function showListButton(element) {
  const button = document.createElement("button");

  button.textContent = "New list";
  button.addEventListener("click", () => {
    createList("new list");
  });
  element.appendChild(button);
}

export { createList, showLists, showListButton };
