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

