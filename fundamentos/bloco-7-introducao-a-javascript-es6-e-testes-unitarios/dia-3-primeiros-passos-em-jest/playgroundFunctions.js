function encode(frase) {
  let codificado = '';
  for (let index = 0; index < frase.length; index += 1) {
    if (frase[index] === 'a') {
      codificado = codificado.concat('1');
    } else if (frase[index] === 'e') {
      codificado = codificado.concat('2');
    } else if (frase[index] === 'i') {
      codificado = codificado.concat('3');
    } else if (frase[index] === 'o') {
      codificado = codificado.concat('4');
    } else if (frase[index] === 'u') {
      codificado = codificado.concat('5');
    } else {
      codificado = codificado.concat(frase[index]);
    }
  } return codificado;
}

function decode(frase) {
  let descodificado = '';
  for (let index = 0; index < frase.length; index += 1) {
    if (frase[index] === '1') {
      descodificado = descodificado.concat('a');
    } else if (frase[index] === '2') {
      descodificado = descodificado.concat('e');
    } else if (frase[index] === '3') {
      descodificado = descodificado.concat('i');
    } else if (frase[index] === '4') {
      descodificado = descodificado.concat('o');
    } else if (frase[index] === '5') {
      descodificado = descodificado.concat('u');
    } else {
      descodificado = descodificado.concat(frase[index]);
    }
  } return descodificado;
}

module.exports = {encode, decode};