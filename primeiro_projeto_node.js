var valor1 = 4
var valor2 = 6
var operacao = "+"

function doOperation(operacao, valor1, valor2) {
    if (operacao == "+") {
        return valor1 + valor2;
    } else if (operacao == "-") {
        return valor1 - valor2
    } else if (operacao == "*") {
        return valor1 * valor2
    } else if (operacao == "/") {
        return valor1 / valor2
    } 
}

console.log("O resultado é: ", doOperation(operacao, valor1, valor2))
