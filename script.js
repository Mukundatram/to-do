  // Initialize globalId as a global variable
let globalId = 0;

function markAsDone(todoId) {
    const parent = document.getElementById(todoId);
    parent.children[2].innerHTML = "Done!";
}

function createChild(title, discription, id) {
    const child = document.createElement("div");
    const first = document.createElement("div");
    first.innerHTML = title;
    const second = document.createElement("div");
    second.innerHTML = discription;
    const third = document.createElement("button");
    third.innerHTML = "Mark as Done";
    third.setAttribute("onclick", `markAsDone(${id})`);
    child.appendChild(first);
    child.appendChild(second);
    child.appendChild(third);
    child.setAttribute("id", id);
    return child;
}

function addtodo() {
    const title = document.getElementById("title").value;
    const discription = document.getElementById("discription").value;
    const parent = document.getElementById("todos");
    // Use globalId, then increment it
    parent.appendChild(createChild(title, discription, globalId++));
}