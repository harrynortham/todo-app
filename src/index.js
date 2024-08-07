import "./style.css";

let projects = [];

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
  };
}

function addToProject(projectTitle, todo) {
  // use array find to update the project object with the projects array
  let project = projects.find((project) => project.title === projectTitle);
  if (project) {
    project.todos.push(todo);
  }
}

function createTodo() {
  // create the todo object
  // add the object to the project
}

// setup our default project
let defaultProject = project("default");
projects.push(defaultProject);

// create a first task and assign it to the default project
let defaultTodo = todo("First task", "Lets get this done");
addToProject("default", defaultTodo);

console.log(projects);
