import showTodos from "./todos.js";

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

function newProjectButton(header) {
  console.log(header);
  const button = document.createElement("button");
  button.textContent = "New Project";
  button.addEventListener("click", () => {});
  header.appendChild(button);
}

export { showProjects, newProjectButton };
