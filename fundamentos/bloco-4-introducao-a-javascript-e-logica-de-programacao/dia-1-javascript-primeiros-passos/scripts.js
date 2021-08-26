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

// Exercicio 6

var movimento = "CAVALO".toLowerCase();

if (movimento == "cavalo") {
	console.log("Duas casas a frente e uma para o lado");
} else if (movimento == "peao") {
	console.log("Uma ou duas casas a frente");
} else if (movimento == "torre") {
	console.log("Quantas casas quiser em linha reta");
} else if (movimento == "bispo") {
	console.log("Quantas casas quiser em linha diagonal");
} else if (movimento == "rainha") {
	console.log("Quantas casas quiser em linha reta e diagonal");
} else if (movimento == "rei") {
	console.log("Uma casa em linha reta ou diagonal");
} else {
	console.log("Erro, peça inválida.");
}

// Exercicio 7

const nota = 0;

if (nota > 100 || nota < 0) {
	console.log('Erro, nota inválida!');
} else if (nota >= 90) {
	console.log('A');
} else if (nota >= 80) {
	console.log('B');
} else if (nota >= 70) {
	console.log('C');
} else if (nota >= 60) {
	console.log('D');
} else if (nota >= 50) {
	console.log('E');
} else if (nota >= 0) {
	console.log('F');
}

// Exercicio 8 

const primeiroNumero = 2;
const segundoNumero = 2;
const terceiroNumero = 2;

let resultado = false;

if (primeiroNumero % 2 == 0 || segundoNumero % 2 == 0 || terceiroNumero % 2 == 0) {
	resultado = true
}

console.log(resultado);

// Exercicio 9

const primeiroNumero = 2;
const segundoNumero = 2;
const terceiroNumero = 2;

let resultado = false;

if (primeiroNumero % 2 == 1 || segundoNumero % 2 == 1 || terceiroNumero % 2 == 1) {
	resultado = true
}

console.log(resultado);

// Exercicio 10

const custoInicial = 90;
const valorVenda = 80;

if (custoInicial < 0 || valorVenda < 0) {
	console.log('Valores incorretos');
} else {
	const custoTotal = custoInicial * 1.2;
	const lucroFinal = (valorVenda - custoTotal) * 1000;
	console.log(lucroFinal);
}

// Exercicio 11

const salarioBruto = 6000;
var impostoINSS;

if (salarioBruto >= 5189.82) {
	var impostoINSS = 570.88;
} else if (salarioBruto >= 2594.93 && salarioBruto < 5189.82) {
	var impostoINSS = salarioBruto * 0.11;
} else if (salarioBruto >= 1556.95 && salarioBruto < 2594.92) {
	var impostoINSS = salarioBruto * 0.09;
} else if (salarioBruto <= 1556.94) {
	var impostoINSS = salarioBruto * 0.08;
} 

const salarioBase = salarioBruto - impostoINSS;
var impostoDeRenda;

if (salarioBase >= 4664.68) {
	var impostoDeRenda = (salarioBase * 0.275) - 869.36;
} else if (salarioBase >= 3751.06 && salarioBase < 4664.68) {
	var impostoDeRenda = (salarioBase * 0.225) - 636.13;
} else if (salarioBase >= 2826.66 && salarioBase < 3751.06) {
	var impostoDeRenda = (salarioBase * 0.15) - 354.80;
} else if (salarioBase >= 1903.99 && salarioBase < 2825.66) {
	var impostoDeRenda = (salarioBase * 0.075) - 142.80;
} else if (salarioBase < 1903.99) {
	var impostoDeRenda = 0;
} 

const salarioLiquido = salarioBase - impostoDeRenda;
console.log(salarioLiquido);
