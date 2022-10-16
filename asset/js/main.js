
let newTodo = document.getElementById("newtodo")
let add = document.getElementById("add")
const listtdl = document.querySelector('.todolist')



add.addEventListener("click",

    function (){
     if(newTodo.value.length == 0){
            alert("Please enter a task")
        }else{
        document.getElementById("box").innerHTML += `
        <li>
            <div>
                <input type="checkbox" class="check-button">
                <p id="task">${newTodo.value}</p> 
                <button class="trash-button">delete</button>
            </div>
        </li>`;
        newTodo.value = "";

        }
    }
)

function okdel(e) {
    const item = e.target

    // check
    if (item.classList[0] === 'check-button') {
        const todolist = item.parentElement
        todolist.classList.toggle('checklist')
    }

    // delete
    if (item.classList[0] === 'trash-button') {
        const todolist = item.parentElement
        todolist.remove()
    }
}

listtdl.addEventListener('click', okdel)













 