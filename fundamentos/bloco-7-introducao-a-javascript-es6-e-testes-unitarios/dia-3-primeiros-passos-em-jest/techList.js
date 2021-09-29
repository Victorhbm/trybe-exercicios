const techList = (array, nome) => {
  if (array.length === 0) {
    return 'Vazio!'
  }

  const arrayOrdered = array.sort();
  let result = [];
  
  for (let i = 0; i < arrayOrdered.length; i += 1) {
    result.push({ tech: arrayOrdered[i], name: nome})
  }
  return result;
}
//techList(['HTML', 'AAA', 'Teste', 'BBB'], 'Victor')

module.exports = techList;