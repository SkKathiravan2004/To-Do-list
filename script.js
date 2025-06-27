function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") return;

    const li = document.createElement("li");
    li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <div class="task-buttons">
            <button class="edit-btn" onclick="editTask(this)">&#9998;</button>
            <button class="delete-btn" onclick="deleteTask(this)">&times;</button>
        </div>
    `;

    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}

function deleteTask(button) {
    const li = button.closest("li");
    li.remove();
}

function editTask(button) {
    const li = button.closest("li");
    const span = li.querySelector(".task-text");
    const newText = prompt("Edit your task:", span.textContent);
    if (newText !== null && newText.trim() !== "") {
        span.textContent = newText.trim();
    }
}
