var post = document.getElementById("postButton");
var clear = document.getElementById("clearButton");
var mark = document.getElementById("markButton");
var del = document.getElementById("deleteButton");

post.addEventListener("click", postToDo);
clear.addEventListener("click", clearList);
mark.addEventListener("click", markAll);
del.addEventListener("click", deleteAll);

function postToDo(event) {
    event.preventDefault();
    var newTask = document.getElementById("textField").value;
    var tf = document.getElementById("textField");
    var listTasks = document.getElementById("listTasks");

    var div = document.createElement("div");
    var checkbox = document.createElement("input");
    var label = document.createElement("label");

    if(tf.value == "") {
        alert("El campo de texto no puede estar vacío.");
    } else {
        checkbox.type = "checkbox";
        checkbox.name = "toDo";

        label.textContent = newTask;
        label.className = "lbTask";

        div.appendChild(checkbox);
        div.appendChild(label);

        listTasks.appendChild(div);

        tf.value = "";
    }
}

function clearList() {
    var tasks = document.getElementsByName("toDo");
    for(var i = 0; i < tasks.length; i++) {
        tasks[i].checked = false;
    }
}

function markAll() {
    var tasks = document.getElementsByName("toDo");
    for(var i = 0; i < tasks.length; i++) {
        tasks[i].checked = true;
    }
}

function deleteAll() {
    var tasks = document.getElementsByName("toDo");
    for(var i = 0; i < tasks.length; i++) {
        if(tasks[i].checked) {
            tasks[i].parentElement.remove();
        }
    }
}