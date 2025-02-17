let display = document.getElementById("display");
let currentInput = ""
let currentOperator = ""

function addNumber(value){
    currentInput += value
    tela.textContent = currentInput
}

function addOperator(operator){
    if(currentInput === "" && operator !== ".") return;
    
    let srepeticao = currentInput.slice(-1);
    if (["+", "-", "x", "/", "."].includes(srepeticao) && ["+", "-", "x", "/", "."].includes(operador)){
        alert('Não é permitido inserir dois operadores consecutivos');
        return;
    } 

    currentInput += operator;
    tela.textContent = currentInput
}

function clean(){
    tela.textContent = ""
}

function del(){
    currentInput = currentInput.slice(0, -1)
    tela.textContent = currentInput
}

function calculate(){
    if (!currentInput) return;

    currentInput = currentInput.replace(/x/g, '*');

    try {
        let result = new Function('return '+ currentInput) ()
        tela.textContent = result;
        currentInput = result.toString();

    } catch (error) {
        tela.textContent = "Erro";
        currentInput = "";
    }
}
function mostrarNaTela(mostrar) {
    const regexSinais = new RegExp(/[\+\-\*\/]$/);
    const ultimoCaractereSinal = regexSinais.test(caixinha.value);
    const valorDigitadoSinal = regexSinais.test(mostrar);    
    
    if (!ultimoCaractereSinal || !valorDigitadoSinal) {
      if (caixinha.value == "*") {
        caixinha.value = "";
      }
      caixinha.value += mostrar;
      console.log(mostrar);
      console.log(caixinha.value);
    }
}
