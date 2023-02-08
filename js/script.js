let input = document.querySelector("input")
let ul = document.querySelector("ul")
let delt = document.querySelectorAll("i")
input.addEventListener("keydown",(event)=>{
    if(event.key == "Enter"){
        event.preventDefault()
        if(event.target.value){
            let newTodo = document.createElement("li")
            let newTodoSpan = document.createElement("span")
            newTodoSpan.innerHTML = event.target.value
            let newTodoTrash = document.createElement("i")
            newTodoTrash.className = "fas fa-trash"
            newTodoTrash.addEventListener("click",(event)=>{
                event.target.parentElement.remove()
            })
            newTodo.append(newTodoSpan,newTodoTrash)
            ul.appendChild(newTodo)
            event.target.value = ""
        }
    }
})