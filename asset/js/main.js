let newTodo = document.getElementById("newtodo")
let add = document.getElementById("add")
let list = document.getElementById("todolist")



add.addEventListener("click",

    function () {
        if (newTodo.value.length == 0) {
            alert("Please enter a task")
        } else {
            document.getElementById("box").innerHTML += `
        <li>
                    <div class="container">
                        <div class="check">
                            <input type="checkbox" class="check-button">
                            <p id="task">${newTodo.value}</p>    
                        </div>
                        <button class="remove-button"><i class="fa-solid fa-x"></i></button>
                    </div>
                </li>`;
            newTodo.value = "";

        }
    }
)

function checkDelete(e) {
    const item = e.target

    if (item.classList[0] === 'check-button') {
        const todolist = item.parentElement
        todolist.classList.toggle('checklist')
    }
    if (item.classList[0] === 'remove-button') {
        const todolist = item.parentElement.parentElement
        todolist.remove()
    }
}

list.addEventListener('click', checkDelete)