import { showLists } from "./lists.js";

function updateDisplay() {
  const container = document.getElementById("content");
  container.innerHTML = "";
  showLists(lists, container);
}

export { updateDisplay };
