// Exercicio 01 - Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n .

let n = 10;
let base = '';
let asterisco = '*';

for (let index = 0; index < n; index += 1) {
	base += asterisco;
}

for (index = 0; index < n; index += 1) {
	console.log(base);
}

// Exercicio 02 - Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.

let numero = 9;
let b = '';

for (let i = 0; i < numero; i += 1) {
	b += '*'
	console.log(b);
}

// Exercicio 03 - Agora inverta o lado do triângulo.