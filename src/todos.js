import { updateDisplay } from "./display.js";

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

// use window to make available globally
function createTodo(todoContent, projectTitle) {
  // create the todo object
  const newTodo = todo(
    todoContent.title,
    todoContent.description,
    todoContent.dueDate,
    todoContent.priority
  );
  // add the object to the project
  addTodoProject(projectTitle, newTodo);
  updateDisplay();
}

function addTodoProject(projectTitle, todo) {
  // use array find to update the project object with the projects array
  const project = projects.find((project) => project.title === projectTitle);
  if (project) {
    project.todos.push(todo);
  }
}

function showTodos(todos) {
  todos.forEach((todo) => {
    console.log(todo);
  });
}

function showTodoForm(container) {
  const formFields = ["title", "description", "dueDate", "priority"];
  formFields.forEach((field) => {
    const div = document.createElement("div");
    const textnode = document.createTextNode(field);
    div.appendChild(textnode);
    container.appendChild(div);
  });
}

export { createTodo, showTodos };
