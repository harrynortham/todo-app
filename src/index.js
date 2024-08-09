import "./style.css";
import { createList, showListButton } from "./lists.js";
import { createTodo } from "./todos.js";

function init() {
  // initialisation stuff here
  showListButton(document.getElementById("actions"));
  // create a default project
  createList("Shopping List");
  // create a first task and assign it to the default project
  createTodo({ title: "Buy Milk" }, "Shopping List");
}

// elsewhere in code
init();
