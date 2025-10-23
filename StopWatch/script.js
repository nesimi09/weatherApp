const input = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('todoList');

addBtn.addEventListener("click" , function(){
    const task = input.value;
    if (task == "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");
    li.className = "todo-item";

    const taskText = document.createElement("span");
    taskText.textContent = task;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    deleteBtn.addEventListener("click" , function(){
        li.remove();
    })

    li.appendChild(taskText);
    li.appendChild(deleteBtn)
    list.appendChild(li)
    input.value = "";
});



