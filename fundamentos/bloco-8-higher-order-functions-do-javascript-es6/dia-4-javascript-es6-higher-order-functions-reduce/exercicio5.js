// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  const justOneArray = names.reduce((acc, currentValue) => {
    return acc + currentValue.split(',');
  }, '');

  const newArray = justOneArray.split('');
  return newArray.reduce((acc, currentValue) => {
    if (currentValue === 'a' || currentValue === 'A') {
      return acc + 1
    }
    return acc;
  }, 0)
}

console.log(containsA());