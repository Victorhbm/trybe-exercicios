// Parte 1 - Objetos e For/In

// 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.

// let info = {
// 	personagem: 'Margarida',
// 	origem: 'Pato Donald',
// 	nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };

//   console.log('Bem-vinda, ' + info.personagem);

// 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.

// info.recorrente = 'Sim';
// console.log(info);

// 3 - Faça um for/in que mostre todas as chaves do objeto.

// for (let key in info) {
// 	console.log(key);
// }

// 4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. 

// for (let key in info) {
// 	console.log(info[key]);
// }

// 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. 

// let newInfo = {
// 	personagem: 'Tio Patinhas',
// 	origem: 'Christmas on Bear Mountain, Dells Four Color Comics 178',
// 	nota: 'O último MacPatinhas',
// 	recorrente: 'Sim'
// }

// for (let index in info) {
// 	if (info[index] === 'Sim' && newInfo[index] === 'Sim') {
// 		console.log('Ambos recorrentes');
// 	} else {
// 		console.log(info[index] + ' e ' + newInfo[index]);
// 	}
// }

// Parte II - Funções

// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function verificaPalindromo (palavra) {
	let reverse = palavra.split('').reverse().join('');
	if (reverse == palavra) {
		return true
	} else {
		return false
	}
}

console.log(verificaPalindromo('arara'));
console.log(verificaPalindromo('desenvolvimento'));
