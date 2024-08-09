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
function createTodo(todoContent, listTitle) {
  // create the todo object
  const newTodo = todo(
    todoContent.title,
    todoContent.description,
    todoContent.dueDate,
    todoContent.priority
  );
  // add the object to the list
  addTodolist(listTitle, newTodo);
  updateDisplay();
}

function addTodolist(listTitle, todo) {
  // use array find to update the list object with the lists array
  const list = lists.find((list) => list.title === listTitle);
  if (list) {
    list.todos.push(todo);
  }
}

function showTodos(todos) {
  //create a list
  const list = document.createElement("ul");
  todos.forEach((todo) => {
    // add a list element with the todo to the list
    //append the list to the div
    let li = document.createElement("li");
    li.innerText = todo.title;
    list.appendChild(li);
  });
  //return the list element
  return list;
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
