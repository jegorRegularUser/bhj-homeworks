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

const removeTask = (e) => {
  const taskElement = e.target.closest(".task");
  taskElement.remove();
  saveTasks();
};

const saveTasks = () => {
  const tasks = Array.from(tasksList.children).map(
    (task) => task.firstChild.textContent
  );
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const loadTasks = () => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => {
    const taskElement = createTaskElement(task);
    tasksList.appendChild(taskElement);
  });
};

const createTaskElement = (taskText) => {
  const taskElement = document.createElement("div");
  taskElement.className = "task";

  const taskTitleElement = document.createElement("div");
  taskTitleElement.className = "task__title";
  taskTitleElement.textContent = taskText;

  const removeTaskButton = document.createElement("a");
  removeTaskButton.href = "#";
  removeTaskButton.className = "task__remove";
  removeTaskButton.textContent = "×";
  removeTaskButton.addEventListener("click", removeTask);

  taskElement.appendChild(taskTitleElement);
  taskElement.appendChild(removeTaskButton);

  return taskElement;
};

addTaskButton.addEventListener("click", addTask);
taskInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

window.onload = loadTasks;
