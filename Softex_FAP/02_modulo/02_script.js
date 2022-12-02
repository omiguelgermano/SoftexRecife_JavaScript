/*
Com os conceitos aprendidos, crie um programa de calculadora que: 

receba dois valores, que devem ser salvos em variáveis; 
o usuário deve colocar qual operador ele vai utilizar por 
meio dos símbolos aritméticos; 
com os dois valores e o operador definido, o programa deve 
fazer a operação e retornar o resultado; 
se houver divisão, você deve retornar o resultado e a sobra, caso haja alguma. 

Trabalhe esse código em seu IDE, suba ele para sua conta no GitHub e 
compartilhe o link desse projeto no campo ao lado para que outros 
desenvolvedores possam analisá-lo.
*/

var valor1
var valor2
var operacao
//var readlineSync = require('readline-sync');
//operacao = readlineSync.question("Qual operacao deseja efetuar (+) (-) (*) (/) ?: \n");
//valor1 = parseFloat(readlineSync.question("Insira o primeiro numero: \n"));
//valor2 = parseFloat(readlineSync.question("Insira o segundo numero: \n"));


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