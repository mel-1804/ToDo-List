const inputTodoList = document.querySelector("#exampleFormControlInput");
let valueOfInput = ''

inputTodoList.addEventListener("change", (e) => {
    console.log(e.target.value);
})

const containerList = document.querySelector("ul")

inputTodoList.addEventListener("keydown", (e)=> {
    if(e.keyCode ===13){
        const Li = document.createElement("Li")
        Li.textContent = valueOfInput;
        containerList.appendChild(Li);
    }
})