const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1 - Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
const addKey = (objeto, chave, valor) => objeto[chave] = valor;

addKey(lesson2, 'turno', 'noite');

console.log(lesson2);

// 2 - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const keysList = (objeto) => Object.keys(objeto);

console.log(keysList(lesson2));

// 3 - Crie uma função para mostrar o tamanho de um objeto.
const showSizeObject = (objeto) => Object.keys(objeto).length;

console.log(showSizeObject(lesson2));

// 4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
function valueList(objeto) {
  return Object.values(objeto);
}

console.log(valueList(lesson2));

// 5 - Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . 
const allLessons = {
  lesson1: {},
  lesson2: {},
  lesson3: {}
};

Object.assign(allLessons.lesson1, lesson1);
Object.assign(allLessons.lesson2, lesson2);
Object.assign(allLessons.lesson3, lesson3);

console.log(allLessons);

// 6 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const totalStudents = (objeto) => {
  let result = 0;
  for (const key in objeto) {
    result += objeto[key].numeroEstudantes;
  }
  return result;
}

console.log(totalStudents(allLessons));

// 7 - Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
const searchKey = (object, position) => {
  const objectArray = Object.values(object);
  return objectArray[position];
}

console.log( searchKey(lesson1, 2) );

// 8 - Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:
const verifyPair = (object, key, value) => {
  let result = false;
  for (const chave in object) {
    if (chave.includes(key) && object[chave].includes(value)) {
      result = true;
    }
  }
  return result;
}

console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));


// Exercícios Bônus

// 1 - Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.
function countStudents(object) {
  let result = 0;
  for (const key in object) {
    //console.log(Object.values(object[key]).includes('Matemática'));
    if (Object.values(object[key]).includes('Matemática')) {
      result += object[key].numeroEstudantes;
    }
  }
  return `Total de estudantes: ${result}`;
}

console.log(countStudents(allLessons));

// 2 - Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:
const createReport = (object, professor) => {
  const relatorio = {
    professor: professor,
    aulas: [],
    estudantes: 0
  }
  for (const key in object) {
    if (Object.values(object[key]).includes(professor)) {
      relatorio.aulas.push(object[key].materia);
      relatorio.estudantes += object[key].numeroEstudantes;
    }
  }
  return relatorio;
}

console.log(createReport(allLessons, 'Maria Clara'))