// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here
const ul = document.querySelector('ul');
const addButton = document.querySelector('.add-btn');
const dialog = document.querySelector('dialog');
const form = document.querySelector('form');
const input = document.querySelector('form input');

function createTodo(todo) {
  const li = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = 'todo-' + todo.id;
  checkbox.checked = todo.completed;

  const label = document.createElement('label');
  label.htmlFor = 'todo-' + todo.id;
  label.textContent = todo.task;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'X';

  checkbox.addEventListener('change', function () {
    todo.completed = checkbox.checked;
    console.log(todoList);
  });

  deleteButton.addEventListener('click', function () {
    const index = todoList.indexOf(todo);

    if (index !== -1) {
      todoList.splice(index, 1);
    }

    ul.removeChild(li);

    console.log(todoList);
  });

  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(deleteButton);

  ul.appendChild(li);
}

for (const todo of todoList) {
  createTodo(todo);
}

addButton.addEventListener('click', function () {
  dialog.showModal();
});

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const taskName = input.value;

  if (taskName !== '') {
    const newTodo = {
      id: Date.now(),
      task: taskName,
      completed: false,
    };

    todoList.push(newTodo);

    createTodo(newTodo);

    console.log(todoList);

    input.value = '';
    dialog.close();
  }
});