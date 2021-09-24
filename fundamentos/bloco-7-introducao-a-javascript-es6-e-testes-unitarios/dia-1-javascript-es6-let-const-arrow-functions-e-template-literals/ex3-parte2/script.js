// Exercício 3 - Parte II
const getTitle = document.getElementById('title');
const getButton = document.getElementById('button');
const getCounter = document.getElementById('counter');
getCounter.innerText = 0;
let clickCount = 0;

getButton.addEventListener('click', () => {
  clickCount += 1
  getCounter.innerText = clickCount;
});

// Exercício 4 - Parte II
let stringDeterminada = 'Tryber x aqui';
let principaisSkills = ['HTML', 'CSS', 'JavaScript', 'Git', 'Lógica'];

const substituiPalavra = (palavra) => stringDeterminada.replace('x', palavra);

const victor = substituiPalavra('Victor');
const teste = (param1) => {
  
}