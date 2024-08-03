const inputTodoList = document.querySelector("#exampleFormControlInput");
let valueOfInput = ''

inputTodoList.addEventListener("change", (e)=>{
    // console.log(e.target.value);
    valueOfInput = e.target.value
})

const containerList = document.querySelector("ul")

const deleteInput = (e)=>{
    e.target.remove()
}

inputTodoList.addEventListener("keydown", (e)=>{
    // para no imprimir un Enter vacío, sin texto
    if(e.target.value == '')return
    
    if(e.keyCode ===13){
        const Li = document.createElement("Li")
        Li.addEventListener("click", deleteInput);
        Li.textContent = e.target.value;
        containerList.appendChild(Li);
        // para vaciar el input luego de agregar la tarea a la lista
        e.target.value = ''
    }
})