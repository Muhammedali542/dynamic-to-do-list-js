document.addEventListener("DOMContentLoaded", function () {
  // Select DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Load Task from local storage
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks.forEach((taskText) => addTask(taskText, false));
  }

  // Function to add a task
  function addTask(taskText, save = true) {
    // Get and trim the value from the input field
    const taskText = taskInput.value.trim();

    if (save) {
      taskText = taskInput.value.trim();
      if (taskText === "") {
        alert("Add your Task 🏁!");
        return;
      }
    }

    // Create a new <li> element for the task
    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;

    // Create a new button element for removing the task
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn");

    // Assign an onclick event to the remove button
    removeButton.onclick = function () {
      taskList.removeChild(taskItem);
    };

    // Append the remove button to the <li> element
    taskItem.appendChild(removeButton);
    // Append the <li> to the task list
    taskList.appendChild(taskItem);

    if (save) {
      saveTaskToLocalStorage(taskText);
    }
    // Clear the task input field
    taskInput.value = "";
  }

  // Function to save task to Local Storage
  function saveTaskToLocalStorage(taskText) {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks.push(taskText); // Add the new task to the array
    localStorage.setItem("tasks", JSON.stringify(storedTasks)); // Save updated tasks array
  }

  // Function to remove a task from Local Storage
  function removeTaskFromLocalStorage(taskText) {
    let storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks = storedTasks.filter((task) => task !== taskText); // Filter out the removed task
    localStorage.setItem("tasks", JSON.stringify(storedTasks)); // Update Local Storage
  }

  // Attach event listeners
  addButton.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", (event) => {
    // Allow task addition by pressing "Enter"
    if (event.key === "Enter") {
      addTask();
    }
  });
});
