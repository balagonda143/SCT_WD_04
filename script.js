function addTask() {
  const taskInput = document.getElementById("taskInput");
  const datetime = document.getElementById("datetime");
  const taskList = document.getElementById("taskList");

  const taskText = taskInput.value.trim();
  const taskTime = datetime.value;

  if (!taskText) {
    alert("Enter a task.");
    return;
  }

  const li = document.createElement("li");

  const taskContent = document.createElement("span");
  taskContent.innerText = `${taskText} ${taskTime ? ` | 📅 ${taskTime}` : ''}`;

  const actions = document.createElement("div");
  actions.className = "task-actions";

  const completeBtn = document.createElement("button");
  completeBtn.innerText = "✔";
  completeBtn.onclick = () => {
    taskContent.style.textDecoration = "line-through";
  };

  const editBtn = document.createElement("button");
  editBtn.innerText = "✏";
  editBtn.onclick = () => {
    const newTask = prompt("Edit task:", taskText);
    if (newTask) {
      taskContent.innerText = `${newTask} ${taskTime ? ` | 📅 ${taskTime}` : ''}`;
    }
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "🗑";
  deleteBtn.onclick = () => li.remove();

  actions.appendChild(completeBtn);
  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(taskContent);
  li.appendChild(actions);
  taskList.appendChild(li);

  taskInput.value = "";
  datetime.value = "";
}
