
const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

taskForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const taskInput = document.getElementById('task-input');
  const taskDateTime = document.getElementById('task-datetime');

  const taskText = taskInput.value.trim();
  const taskTime = taskDateTime.value;

  if (taskText === '') return;

  const li = document.createElement('li');

  const taskInfo = document.createElement('div');
  taskInfo.className = 'task-info';
  taskInfo.innerHTML = `
    <span class="task-text">${taskText}</span>
    <small>${taskTime}</small>
  `;

  const actions = document.createElement('div');
  actions.className = 'actions';

  const completeBtn = document.createElement('button');
  completeBtn.textContent = '✔';
  completeBtn.onclick = () => {
    taskInfo.querySelector('.task-text').classList.toggle('completed');
  };

  const editBtn = document.createElement('button');
  editBtn.textContent = '✏';
  editBtn.onclick = () => {
    const newTask = prompt('Edit task:', taskText);
    if (newTask) {
      taskInfo.querySelector('.task-text').textContent = newTask;
    }
  };

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '🗑';
  deleteBtn.onclick = () => {
    li.remove();
  };

  actions.append(completeBtn, editBtn, deleteBtn);
  li.append(taskInfo, actions);
  taskList.appendChild(li);

  taskInput.value = '';
  taskDateTime.value = '';
});
