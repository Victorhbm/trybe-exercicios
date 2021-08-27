// Exercício de fixação 01

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

// Exercício de fixação 02

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);

// Exercício de fixação 03

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

menu.push('Contato')

console.log(menu);

// Exercício de fixação 04

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index += 1) {
	console.log(groceryList[index]);
}

// Exercício de fixação 05

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let name of names) {
	console.log(name);
}

// Exercício 01 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (index = 0; index < numbers.length; index += 1) {
	console.log(numbers[index]);
}

// Exercicio 02 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

var soma = 0;

for (index = 0; index < numbers.length; index += 1) {
	soma += numbers[index]
}

console.log(soma);

// Exercicio 03 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

var soma = 0;

for (index = 0; index < numbers.length; index += 1) {
	soma += numbers[index]
}

mediaAritmetica = soma / numbers.length;

console.log('Soma:', soma);
console.log('Media aritmética:', mediaAritmetica);

// Exercicio 04 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

var soma = 0;

for (index = 0; index < numbers.length; index += 1) {
	soma += numbers[index]
}

mediaAritmetica = soma / numbers.length;

console.log('Soma:', soma);
console.log('Media aritmética:', mediaAritmetica);

if (mediaAritmetica > 20) {
	console.log('Valor maior que 20');
} else {
	console.log('Valor menor ou igual a 20');
}

// Exercicio 05 - Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

var maiorValor = 0;

for (index = 0; index < numbers.length; index += 1) {
	if (numbers[index] > maiorValor) {
		maiorValor = numbers[index]
	}
}

console.log(maiorValor);

// Exercicio 06 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

var valoresImpares = 0;

for (index = 0; index < numbers.length; index += 1) {
	if ((numbers[index] % 2) == 1) {
		valoresImpares += 1
	} 
}

if (valoresImpares > 0) {
	console.log(valoresImpares);
} else {
	console.log('Nenhum valor ímpar encontrado!');
}

// Exercicio 07 - Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

var menorValor = numbers[0];

for (index = 0; index < numbers.length; index += 1) {
	if (numbers[index] < menorValor) {
		menorValor = numbers[index]
	}
}

console.log(menorValor);

// Exercicio 08 - Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

let numbers = [];

for (index = 1; index < 26; index += 1) {
	numbers.push(index);
}

console.log(numbers);

// Exercicio 09 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

let numbers = [];

for (index = 1; index < 26; index += 1) {
	numbers.push(index / 2);
}

console.log(numbers);

// Exercicios Bônus 01 - Ordene o array numbers em ordem crescente e imprima seus valores;

let numbers = [5, 3, 2, 4, 7, 1, 0, 6]

for (let index = 1; index < numbers.length; index += 1) {
	for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
	  if (numbers[index] < numbers[secondIndex]) {
		let position = numbers[index];
		numbers[index] = numbers[secondIndex];
		numbers[secondIndex] = position;
	  }
	}
  }

console.log(numbers);

// Exercicio bônus 02 - 

let numbers = [5, 3, 2, 4, 7, 1, 0, 6]

for (let index = 1; index < numbers.length; index += 1) {
	for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
	  if (numbers[index] > numbers[secondIndex]) {
		let position = numbers[index];
		numbers[index] = numbers[secondIndex];
		numbers[secondIndex] = position;
	  }
	}
  }

console.log(numbers);

// Exercicio bônus 03 - 

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let novoArray = [];

for (index = 0; index < numbers.length; index += 1) {
		if (index < (numbers.length - 1)) {
			novoArray.push (numbers[index] * numbers[index +  1]); 
		} else {
			novoArray.push (numbers[index] * 2)
		}
}

console.log(novoArray);
