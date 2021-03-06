/* Parte I - Exercício 1 */
const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Parte I - Exercício 2
console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente!`);

// Parte II - Exercício 1
const calcFatorial = (n) => {
  let result = 1;
  for (let i = 1; i <= n; i += 1) {
    result *= i;
  }
  console.log(result);
}
calcFatorial(4);

// Parte II - Exercício 2
const longestWord = (frase) => {
  let separaFrase = frase.split(' ');
  let winner = '';
  for (let i = 0; i < separaFrase.length; i += 1) {
    (separaFrase[i].length > winner.length) ? winner = separaFrase[i] : winner;
  }
  console.log(winner);
}
longestWord('Antônio foi no banheiro e não sabemos o que aconteceu');
