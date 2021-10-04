// Exercício 1
const newPerson = (nome) => {
  return {
    nomeCompleto: nome,
    email: `${nome.split(' ').join('_')}@trybe.com`
  }
}

const newEmployees = (func) => {
  const employees = {
    id1: func('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: func('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: func('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(newPerson));

// Exercício 2
const confereResultado = (numeroApostado, numeroSorteado) => {
  if (numeroApostado === numeroSorteado) {
    return true
  }
  return false
}

function sorteio(aposta, func) {
  let numeroSorteado = Math.floor(Math.random() * 5);

  const retornoVitoria = `Número sorteado: ${numeroSorteado} Aposta: ${aposta}\nParabéns você ganhou!`;
  const retornoDerrota = `Número sorteado: ${numeroSorteado} Aposta: ${aposta}\nTente novamente!`;

  return (func(aposta, numeroSorteado) ? retornoVitoria : retornoDerrota);
}

console.log(sorteio(4, confereResultado));

// Exercício 3
function checkGabarito(gabarito, respostas) {
  let result = 0;

  for (let i = 0; i < gabarito.length; i += 1) {
    if (gabarito[i] === respostas[i]) {
      result += 1;
    } else if (respostas[i] === 'N.A') {
      result += 0;
    } else {
      result -= 0.5;
    }
  }

  return result;
}

const resultadoDaProva = (gabarito, respostas, func) => {
  return func(gabarito, respostas);
}

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(resultadoDaProva(RIGHT_ANSWERS, STUDENT_ANSWERS, checkGabarito));

