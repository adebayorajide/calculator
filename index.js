const inputEl = document.querySelector(".input");
const bodyEl = document.querySelector("body");
inputEl.checked = JSON.parse(localStorage.getItem("mode"));

let display = document.getElementById("display");
let buttons = document.querySelectorAll(".button");
let symbolEl = document.querySelectorAll(".operator")

updateBody()

function updateBody(){
    if(inputEl.checked){
        bodyEl.style.backgroundColor = "black"
        buttons.forEach((button)=>{
            button.style.color = "white"
        })
        display.style.color = "white"

    } else {
        bodyEl.style.backgroundColor = "white"
        buttons.forEach((button)=>{
            button.style.color = "black"
        })
        symbolEl.forEach((sym)=>{
            sym.style.color = "white"
        })
        display.style.color = "black"

    }
}

inputEl.addEventListener("input", ()=>{
    updateBody();
    updatelocalstorage();
})

function updatelocalstorage(){
    localStorage.setItem("mode", JSON.stringify(inputEl.checked))
}

buttons.forEach((button)=>{
    button.addEventListener("click", (e)=>{
       // console.log(e.target.innerText);
        switch(e.target.innerText) {

            case 'C':
            display.innerText = "";
            break;

            case '+/-':
                display.innerText = "-" + display.innerText;
                break;

            case '÷':
                display.innerText += '/';
                break;

            case '=':
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = 'Error'
                }
                break;
               case '×':
                if(display.innerText){
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    })
})