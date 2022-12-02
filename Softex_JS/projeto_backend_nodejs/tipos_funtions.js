/*
Crie um programa que contenha os seguintes tipos de funções:

1. uma função tradicional com a palavra reservada “Function” e sem nenhum parâmetro;
2. uma função tradicional com parâmetros e um retorno de valor;
3. uma arrow function com parâmetros e que retorne um valor.

Crie um programa que utilize essas três funções de forma lógica, por exemplo: 
um programa de calculadora.

Trabalhe esse código em seu IDE, suba ele para sua conta no GitHub e compartilhe o 
link desse projeto no campo ao lado para que outros desenvolvedores possam analisá-lo.
*/

function sandBox() {
    console.log("Aqui podemos brincar!!!")
}

sandBox();

var a
var b
var c

function notaProvas(a, b, c) {
    return a + b + c
}

console.log("A soma total é: ", notaProvas(6, 8, 9), 
    "\nA média final é: ",notaProvas(6, 8, 9)/3);


const mgdoor = nome => "Com a ${nome}, sua empresa esta no Rumo do Sucesso!!!";
mgdoor('MG door');

const calc = (num1, num2, operator) => "Resultado: " + eval(`${num1} ${operator} ${num2}`);
calc(4, 5, '*');