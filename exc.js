/*var n = 5;

for (let i = 0; i <= 10; i++){
    console.log(`${i} X ${n} = ${n+i}`)
}

//Este é para montar uma taboada no qual eu devo pesquisar mais depois

function somar(x1, x2){
    return x1 + x2
}

let resultado = somar(1, 2)

console.log(resultado);

//Aula do Guanabara


/*var nome = window.prompt("digite seu nome:")

window.alert("É um prazer em te cohecer, " + nome + "!")//concatenação
*/

/*var n1 = Number(window.prompt("digite um número: "))
var n2 = Number(window.prompt("digite outro número "))
var s = n1 + n2;*/

//window.alert(`A soma entre os valores ${n1} e ${n2} é igual a ${s}!`)
// o + serve cara cotenação "5 + 4 = 54" e não "9"
//number + number = soma
//string + string = concatenação

/*converter pra numero:
Number()
Number.parseInt()
Number.parseFloat()*/

//var ().toLocaleString("pt-br", {style "currency", currency: "BRL"})

/*var num = 3

num += 4
num -= 3
num **= 2

console.log(num);
*/

var nome = window.prompt("Olá, seja bem vindo! Qual o seu nome?")
var n1 = Number(window.prompt("Insira um número  "))
var n2 = Number(window.prompt("Insira mais um número  "))
var r = n1 + n2

alert(`Olá ${nome}! O resultado da some de ${n1} + ${n2} é: ${r}`)