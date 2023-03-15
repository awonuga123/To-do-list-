// Get the input field and the add button
const newItemInput = document.getElementById('new-item');
const addButton = document.getElementById('add-button');

// Get the todo list element
const todoList = document.getElementById('todo-list');

// Load the todo list from local storage or create an empty array
let todos = JSON.parse(localStorage.getItem('todos')) || [];

// Function to render the todo list
function renderTodoList() {
  // Clear the current todo list
  todoList.innerHTML = '';
  // Loop through the todos array in reverse order (to show the most recently added item first)
  for (let i = todos.length - 1; i >= 0; i--) {
    const todo = todos[i];
    // Create a new list item element
    const li = document.createElement('li');
    // Add a span element with the todo text
    const span = document.createElement('span');
    span.textContent = todo.text;
    li.appendChild(span);
    // Add a delete button with a data-index attribute containing the index of the todo item
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.setAttribute('data-index', i);
    li.appendChild(deleteButton);
    // Add the list item to the todo list
    todoList.appendChild(li);
  }
}

// Call the renderTodoList function to initially render the todo list
renderTodoList();

// Function to add a new todo item
function addTodoItem() {
  // Get the value of the input field and trim any whitespace
  const newItemText = newItemInput.value.trim();
  // If the value is not empty
  if (newItemText !== '') {
    // Create a new todo item object with the text and a unique ID
    const newTodo = {
      text: newItemText,
      id: Date.now()
    };
    // Add the new todo item to the beginning of the todos array
    todos.unshift(newTodo);
    //
