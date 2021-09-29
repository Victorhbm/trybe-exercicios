// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

function checkID (idTest, idParameter) {
  for (const key in professionalBoard) {
    if (Object.values(professionalBoard[key]).includes(idParameter)) {
      idTest = true;
    }
  }

  if (idTest === false) {
    throw Error ('ID não identificada')
  }
}

function checkInformation (informationTest, detailParameter) {
  for (const key in professionalBoard) {
    if (Object.keys(professionalBoard[key]).includes(detailParameter)) {
      informationTest = true;
    }
  }

  if (informationTest === false) {
    throw Error ('Informação indisponível')
  }
}

// Pesquisa
const searchEmployee = (id, detail) => {
  let information;
  let idExists = false;
  let informationExists = false;
  
  checkID(idExists, id);
  checkInformation(informationExists, detail);

  for (const key in professionalBoard) {
    if (professionalBoard[key].id === id) {
      information = professionalBoard[key][detail];
    }
  }

  result = {
    id: id,
    [detail]: information
  }
  return result;
};
console.log(searchEmployee('8579-6', 'firstName'));

module.exports = searchEmployee;