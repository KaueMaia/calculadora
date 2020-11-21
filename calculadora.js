const display = document.querySelector(".tela")
const teclas = document.querySelectorAll("button")
let operando1
let operando2
let operador
let resultado = ""

for( tecla of teclas){
    tecla.addEventListener("click", clicado)
}

function limparDisplay(){
    display.textContent = ""
}
limparDisplay()
function clicado(e){

    if (this.className == "digito"){
        imprime(display.textContent + this.textContent)
    } else if(this.className == "operador"){
        if(resultado != ""){
            operando1 = resultado
            resultado = ""
        }else{
            operando1 = parseFloat(display.textContent)
        }
        operador = this.textContent
        limparDisplay()
    } else if(this.className == "resultado"){
        if (operador == "+"){
            operando2 = parseFloat(display.textContent)

            resultado = operando1 + operando2
        }

        imprime (operando1 + " " + operador + " "+ operando2 + " = " + resultado)
        
    }
}


function imprime(texto){
    display.textContent = texto
}