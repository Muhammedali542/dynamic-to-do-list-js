document.addEventListener("DOMContentLoaded", function () {
  // Select DOM elements
  const addButton = document.getElementById("add-task-btn"); // "Add Task" button
  const taskInput = document.getElementById("task-input"); // Input field for new task
  const taskList = document.getElementById("task-list"); // Unordered list for displaying tasks

  // Function to add a task
  function addTask() {
    // Get and trim the value from the input field
    const taskText = taskInput.value.trim();

    // Check if the input is empty
    if (taskText === "") {
      alert("Add your Task 🏁!"); // Alert user if input is empty
      return; // Exit the function if no task is entered
    }

    // Create a new <li> element for the task
    const taskItem = document.createElement("li");
    taskItem.textContent = taskText; // Set the text content to the task text

    // Create a new button element for removing the task
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove"; // Set button text
    removeButton.classList.add("remove-btn"); // Use classList.add to add class

    // Assign an onclick event to the remove button
    removeButton.onclick = function () {
      taskList.removeChild(taskItem); // Remove the <li> from the task list
    };

    // Append the remove button to the <li> element
    taskItem.appendChild(removeButton);
    // Append the <li> to the task list
    taskList.appendChild(taskItem);
    // Clear the task input field
    taskInput.value = "";
  }

  // Attach event listeners
  addButton.addEventListener("click", addTask); // Call addTask on button click
  taskInput.addEventListener("keypress", (event) => {
    // Allow task addition by pressing "Enter"
    if (event.key === "Enter") {
      addTask();
    }
  });
});
