import "./style.css";
import { createProject, showProjectButton } from "./projects.js";
import { createTodo } from "./todos.js";

function init() {
  // initialisation stuff here
  showProjectButton(document.getElementsByTagName("header")[0]);
  // create a default project
  createProject("Todos");
  // create a first task and assign it to the default project
  createTodo({ title: "First task" }, "Todos");
}

// elsewhere in code
init();
