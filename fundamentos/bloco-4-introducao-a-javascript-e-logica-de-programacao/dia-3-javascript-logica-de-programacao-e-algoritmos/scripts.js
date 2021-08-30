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

let numero = 5;
let b = '';

for (let i = 0; i < numero; i += 1) {
	b += '*'
	console.log(b);
}

// Exercicio 03 - Agora inverta o lado do triângulo.

let number = 5;
let armazena = '';
let position = number;

for (let i = 0; i < number; i += 1) {
	for (let columnIndex = 0; columnIndex <= number; columnIndex += 1) {
		if (columnIndex < position) {
			armazena += ' ';
		} else {
			armazena += '*';
		}
	}
	
	console.log(armazena);
	armazena = '';
	position -= 1;
}

// Exercicio 04 - Depois, faça uma pirâmide com n asteriscos de base:

let number = 11;
let armazena = '';
let position = number;
let meioDaMatriz = (number + 1) / 2;
let controleEsquerdo = meioDaMatriz;
let controleDireito = meioDaMatriz;

for (let i = 0; i <= meioDaMatriz; i += 1) {
	for (let columnIndex = 0; columnIndex <= number; columnIndex += 1) {
		if (columnIndex > controleEsquerdo && columnIndex < controleDireito) {
			armazena += '*';
		} else {
			armazena += ' ';
		}
	}
	
	console.log(armazena);
	armazena = '';
	controleDireito += 1;
	controleEsquerdo -= 1; 
}

// Exercicio 05 - Faça uma pirâmide com n asteriscos de base, que seja vazia no meio:

