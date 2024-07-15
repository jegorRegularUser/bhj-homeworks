const taskInput = document.getElementById("task__input");
const addTaskButton = document.getElementById("tasks__add");
const tasksList = document.getElementById("tasks__list");

const addTask = () => {
  const taskText = taskInput.value.trim();
  if (taskText) {
    const taskElement = createTaskElement(taskText);
    tasksList.appendChild(taskElement);
    taskInput.value = "";
    saveTasks();
  }
};

const removeTask = e => {
  e.target.closest(".task").remove();
  saveTasks();
};

const saveTasks = () => {
  const tasks = [...tasksList.children].map(
    task => task.firstElementChild.textContent
  );
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const loadTasks = () => {
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  tasks.forEach(task => {
    const taskElement = createTaskElement(task);
    tasksList.appendChild(taskElement);
  });
};

const createTaskElement = taskText => {
  const taskElement = document.createElement("div");
  taskElement.className = "task";
  taskElement.innerHTML = `
    <div class="task__title">${taskText}</div>
    <a href="#" class="task__remove">&times;</a>
  `;
  taskElement
    .querySelector(".task__remove")
    .addEventListener("click", removeTask);
  return taskElement;
};

addTaskButton.addEventListener("click", addTask);
tasksList.addEventListener("click", removeTask);

window.onload = loadTasks;
