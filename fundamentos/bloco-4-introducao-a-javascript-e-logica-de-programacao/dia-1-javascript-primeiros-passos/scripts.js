// Exercicio 1

const a = 3;
const b = 2;

var adicao = a + b;
var subtracao = a - b;
var multiplicacao = a * b;
var divisao = a / b;
var modulo = a % b;

console.log(adicao);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);
console.log(modulo);

// Exercicio 2

const primeiroNumero = 10;
const segundoNumero = 10;

if (primeiroNumero > segundoNumero) {
	console.log(primeiroNumero);
} else if (segundoNumero > primeiroNumero) {
	console.log(segundoNumero);
} else {
	console.log("Os números são iguais");
}

// Exercicio 3

const primeiroNumero = 15;
const segundoNumero = 17;
const terceiroNumero = 25;

if (primeiroNumero > segundoNumero && primeiroNumero > terceiroNumero) {
	console.log(primeiroNumero);
} else if (segundoNumero > primeiroNumero && segundoNumero > terceiroNumero) {
	console.log(segundoNumero);
} else if (terceiroNumero > primeiroNumero && terceiroNumero > segundoNumero) {
	console.log(terceiroNumero);
} else {
	console.log("Os números são iguais");
}

// Exercicio 4

const autenticidade = true;

if (autenticidade == true) {
	console.log("Positive!");
}
else if (autenticidade == false) {
	console.log("Negative!");
}
else {
	console.log("zero");
}

// Exercicio 5

const angulo1 = 100;
const angulo2 = 10;
const angulo3 = 70;
var soma = angulo1 + angulo2 + angulo3;

if (soma == 180) {
	console.log(true);
} else if (angulo1 > 180 || angulo2 > 180 || angulo3 > 180){
	console.log("Erro, ângulo inválido");
} else {
	console.log(false);
}