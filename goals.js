const todoList = document.getElementById('ToDo');
const newTaskInput = document.getElementById('addTask');
const addTaskButton = document.getElementById('addButton');
const tasks = []; 
addTaskButton.addEventListener('click', function() {
  const task = newTaskInput.value.trim(); 
  if (task) { 
    tasks.push(task);
    newTaskInput.value = ''; 
    renderTodoList();
  }
});
function renderTodoList() {
  todoList.innerHTML = ''; 
  tasks.forEach((task, index) => {
    const listItem = document.createElement('li');
    listItem.innerText = task;
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', function() {
      tasks.splice(index, 1); 
      renderTodoList();
    });
    listItem.appendChild(deleteButton);
    todoList.appendChild(listItem);
  });
}