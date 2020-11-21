const display = document.querySelector(".tela")
const teclas = document.querySelectorAll("button")
let operando1
let operando2
let operandos = []
let operadores = []
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
        if(resultado != ""){
            resultado = ""
            limparDisplay()
        }
        imprime(display.textContent + this.textContent)
    } else if(this.className == "operador"){
        if(resultado != ""){
            operandos.push(parseFloat(resultado))
            resultado = ""
        }
        else{
            operandos.push(parseFloat(display.textContent))
        }
        operadores.push(this.textContent)
        limparDisplay()
    } else if(this.className == "resultado"){
        operandos.push(parseFloat(display.textContent))
        let index = 0
        let txt_impressao = ""
        for(operador of operadores){
            if(operador == "+"){
                if(index == 0){
                    resultado = operandos[index] + operandos[index+1]
                    txt_impressao += operandos[index] + " " + operador + " "+ operandos[index+1] 
                } else{
                    resultado = resultado + operandos[index+1]
                    txt_impressao += " " + operador + " "+ operandos[index+1] 
                }       
            }
            index += 1
        }
        imprime(txt_impressao + " = "+ resultado)
        operandos = []
        operadores = []
    }
}


function imprime(texto){
    display.textContent = texto
}