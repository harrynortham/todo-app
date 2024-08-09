import { showTodos } from "./todos.js";

//we will change this to session storage that both modules can access
window.projects = [];

function project(title) {
  return {
    title,
    todos: [],
  };
}

function addToProject(projectTitle, todo) {
  // use array find to update the project object with the projects array
  const project = projects.find((project) => project.title === projectTitle);
  if (project) {
    project.todos.push(todo);
  }
}

function createProject(projectTitle) {
  const newProject = project(projectTitle);
  projects.push(newProject);
  const container = document.getElementById("content");
  container.innerHTML = "";
  showProjects(projects, container);
}

function showProjects(projects, container) {
  projects.forEach((project) => {
    const div = document.createElement("div");
    const h4 = document.createElement("H4");
    div.appendChild(h4);
    const textnode = document.createTextNode(project.title);
    h4.appendChild(textnode);
    const button = document.createElement("button");
    button.textContent = "New todo";
    div.appendChild(button);
    container.appendChild(div);
    showTodos(project.todos);
  });
}

function newProjectButton(element) {
  const button = document.createElement("button");
  button.textContent = "New Project";
  button.addEventListener("click", () => {
    createProject("new project");
  });
  element.appendChild(button);
}

export { createProject, addToProject, showProjects, newProjectButton };
