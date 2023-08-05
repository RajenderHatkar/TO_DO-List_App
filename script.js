//Accessing Html objects for adding functionality to the elements
// Get references to the input, the task list, the counters, and the filter buttons
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const totalTasksCounter = document.getElementById("totalTasks");
//const completedTasksCounter = document.getElementById("completedTasks");
const allButton = document.getElementsByTagName("button")[0];
const completedButton = document.getElementsByTagName("button")[1];
const uncompletedButton = document.getElementsByTagName("button")[2];

let totalTasks = 0;
//let completedTasks = 0;

// Function to update task counters
function updateTaskCounters() {
  totalTasksCounter.textContent = totalTasks;
  //completedTasksCounter.textContent = completedTasks;
}

// Function to add a new task
function addTask() {
  const taskText = taskInput.value;
  if (taskText == "") {
    alert("Enter Something before hitting submit!!!")

  }
  else{
    totalTasks++;
    updateTaskCounters();

    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
      <input type="checkbox" onclick="toggleTaskComplete(this)">
      <span class="task-text">${taskText}</span>
      <button onclick="deleteTask(this)" class="delete-btn">Delete</button>
    `;
    taskList.appendChild(taskItem);
    taskInput.value = "";
  

  }
}

// Function to toggle task completion
function toggleTaskComplete(checkbox) {
  const taskText = checkbox.nextElementSibling;
  if (checkbox.checked) {
    taskText.style.textDecoration = "line-through";
    //completedTasks++;
  } else {
    taskText.style.textDecoration = "none";
    //completedTasks--;
  }
  //updateTaskCounters();
}

// Function to delete a task
function deleteTask(button) {
  const taskItem = button.parentNode;
  taskList.removeChild(taskItem);
  totalTasks--;
 /* if(button.previousElementSibling.checked){
    completedTasks--;
  }*/
  updateTaskCounters();
}

//function to complete all tasks
function completeAllTasks() {
  const tasks = taskList.getElementsByTagName("li");
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    const checkbox = task.getElementsByTagName("input")[0];
    const taskText = task.getElementsByTagName("span")[0];
    if (!checkbox.checked) {
      checkbox.checked = true;
      taskText.style.textDecoration = "line-through";
      //completedTasks++;
    }
  }
  //updateTaskCounters();
}

// Function to clear all completed tasks
function clearCompletedTasks() {
  const tasks = taskList.getElementsByTagName("li");
  for (let i = tasks.length - 1; i >= 0; i--) {
    const task = tasks[i];
    const checkbox = task.getElementsByTagName("input")[0];
    if (checkbox.checked) {
      taskList.removeChild(task);
      totalTasks--;
      //completedTasks--;
    }
  }
  updateTaskCounters();
}

// Function to filter tasks based on completion status
function filter(filter) {
  const tasks = taskList.getElementsByTagName("li");
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    const checkbox = task.getElementsByTagName("input")[0];
    switch (filter) {
      case "all":
        task.style.display = "flex";
        break;
      case "completed":
        task.style.display = checkbox.checked ? "flex" : "none";
        break;
      case "uncompleted":
        task.style.display = checkbox.checked ? "none" : "flex";
        break;
    }
  }
}

