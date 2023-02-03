let input = document.querySelector("input")
// let newTodo = document.createElement("li")
let ul = document.querySelector("ul")
input.addEventListener("keydown",(event)=>{
    if(event.key == "Enter"){
        event.preventDefault()
        if(event.target.value){
            // console.log(event.target.value)
            let newTodo = document.createElement("li")
            newTodo.innerHTML = "<span>" + event.target.value + "</span><i class=\"fas fa-trash\"></i>"
            ul.appendChild(newTodo)
            event.target.value = ""
        }
    }
})