function addTask() {
    const input = document.getElementById("taskInput");
    const text = input.value;

    if (text === "") return;

    let saved = localStorage.getItem("tasks");
    let tasks = saved ? JSON.parse(saved) : [];

    tasks.push(text);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    const ul = document.getElementById("taskList");
    const li = document.createElement("li");
    li.textContent = text;
    ul.appendChild(li);

    input.value = "";
}
window.onload = function() {
    let saved = localStorage.getItem("tasks");
    let tasks = saved ? JSON.parse(saved) : [];

    const ul = document.getElementById("taskList");

    tasks.forEach(function(task) {
        const li = document.createElement("li");
        li.textContent = task;
        ul.appendChild(li);
    });
};