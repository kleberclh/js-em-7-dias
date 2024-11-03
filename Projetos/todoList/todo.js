const todoInput = document.getElementById("todo-input");
const todos = document.getElementById("todos");

todoInput.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    const todoText = todoInput.value;
    if(todoText) {
      addTodo(todoText);
      todoInput.value = "";      
    }    
  }
});

function addTodo(todo) {
  const todoElement = document.createElement("li");
  todoElement.innerText = todo;  
  todoElement.addEventListener("click", removeTodo);  
  todos.append(todoElement);
}

function removeTodo(event) {
  event.target.remove();
}