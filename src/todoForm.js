const formFields = ["title", "description", "dueDate", "priority"];

export default function todoForm(container) {
  formFields.forEach((field) => {
    const div = document.createElement("div");
    const textnode = document.createTextNode(field);
    div.appendChild(textnode);
    container.appendChild(div);
  });
}
