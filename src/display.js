import { showProjects } from "./projects.js";

function updateDisplay() {
  const container = document.getElementById("content");
  container.innerHTML = "";
  showProjects(projects, container);
}

export { updateDisplay };
