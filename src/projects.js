import { showTodos, createTodo } from "./todos.js";
import { updateDisplay } from "./display.js";

//we will change this to session storage that both modules can access
window.projects = [];

function project(title) {
  return {
    title,
    todos: [],
  };
}

function createProject(projectTitle) {
  const newProject = project(projectTitle);
  projects.push(newProject);
  updateDisplay();
  console.log(projects);
}

function showProjects(projects, container) {
  projects.forEach((project) => {
    const div = document.createElement("div");
    const h4 = document.createElement("H4");
    div.appendChild(h4);
    const textnode = document.createTextNode(project.title);
    h4.appendChild(textnode);

    //add the todos to the div
    let todoList = showTodos(project.todos);
    div.appendChild(todoList);

    const button = document.createElement("button");
    button.textContent = "New todo";
    button.addEventListener("click", () => {
      createTodo({ title: "New task" }, project.title);
    });
    div.appendChild(button);

    container.appendChild(div);
  });
}

function showProjectButton(element) {
  const button = document.createElement("button");

  button.textContent = "New Project";
  button.addEventListener("click", () => {
    createProject("new project");
  });
  element.appendChild(button);
}

export { createProject, showProjects, showProjectButton };
