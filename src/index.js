import "./style.css";
import todoForm from "./todoForm.js";
import { showProjects, newProjectButton } from "./projects.js";

const projects = [];

function project(title) {
  return {
    title,
    todos: [],
  };
}

function todo(title, description, dueDate, priority) {
  return {
    title,
    description,
    dueDate,
    priority,
    completed: false,
    setCompleted() {
      completed = !completed;
    },
  };
}

function addToProject(projectTitle, todo) {
  // use array find to update the project object with the projects array
  const project = projects.find((project) => project.title === projectTitle);
  if (project) {
    project.todos.push(todo);
  }
}

window.createProject = (projectTitle) => {
  const newProject = project(projectTitle);
  projects.push(newProject);
  updateDisplay();
};

// use window to make available globally
window.createTodo = (todoContent, projectTitle) => {
  // create the todo object
  const newTodo = todo(
    todoContent.title,
    todoContent.description,
    todoContent.dueDate,
    todoContent.priority
  );
  // add the object to the project
  addToProject(projectTitle, newTodo);
  updateDisplay();
};

function updateDisplay() {
  const container = document.getElementById("content");
  container.innerHTML = "";
  showProjects(projects, container);
}

function init() {
  // initialisation stuff here
  newProjectButton(document.getElementsByTagName("header")[0]);
  // create a default project
  //createProject("Todos");
  // create a first task and assign it to the default project
  //createTodo({ title: "First task" }, "Todos");
}

// elsewhere in code
init();
