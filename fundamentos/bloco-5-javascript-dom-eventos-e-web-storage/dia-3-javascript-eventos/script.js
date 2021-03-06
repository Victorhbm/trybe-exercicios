function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Exercicio 1
function addDays () {
	const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
	const daysList = document.getElementById('days');
	for (let i = 0; i < dezDaysList.length; i += 1) {
		const dayListItem = document.createElement('li')
		dayListItem.innerHTML = dezDaysList[i];
		dayListItem.className = 'day'
		if (dezDaysList[i] === 24 || dezDaysList[i] === 31) {
			dayListItem.className = 'day holiday';
		}
		if (dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18) {
			dayListItem.className = 'day friday';
		}
		if (dezDaysList[i] === 25) {
			dayListItem.className = 'day friday holiday';
		}
		daysList.appendChild(dayListItem)
	}
}
addDays();

// Exercicio 2
function makeButton (feriado) {
	const button = document.createElement('button');
	button.innerHTML = feriado;
	button.id = 'btn-holiday';
	document.querySelector('.buttons-container').appendChild(button);
}
makeButton('Feriados');

// Exercicio 3
holidayButton = document.getElementById('btn-holiday');
holiday = document.querySelectorAll('.holiday');
for (let index = 0; index < holiday.length; index += 1) {
	holidayButton.addEventListener('click', function(){
		if (holiday[index].style.backgroundColor === 'green') {
			holiday[index].style.backgroundColor = 'rgb(238,238,238)';
		} else {
			holiday[index].style.backgroundColor = 'green';
		}
	})
}

// Exercicio 4
function makeFridayButton (friday) {
	const button2 = document.createElement('button');
	button2.innerHTML = friday;
	button2.id = "btn-friday";
	document.querySelector('.buttons-container').appendChild(button2);
}
makeFridayButton ('Sexta-feira');

// Exercicio 5
fridayButton = document.getElementById('btn-friday');
friday = document.querySelectorAll('.friday');
for (let index = 0; index < friday.length; index += 1) {
	fridayButton.addEventListener('click', function(){
		if (friday[index].style.backgroundColor === 'blue') {
			friday[index].style.backgroundColor = 'rgb(238,238,238)';
		} else {
			friday[index].style.backgroundColor = 'blue';
		}
	})
}

// Exercicio 6
const dayContainer = document.querySelector('#days');

dayContainer.addEventListener('mouseover', zoomUp)
function zoomUp (event) {
	event.target.style.fontSize = '25px';
	event.target.style.cursor = 'pointer';
}
dayContainer.addEventListener('mouseout', zoomDown)
function zoomDown (event) {
	event.target.style.fontSize = '20px';
}

// Exercicio 7
function addTask (task) {
	let taskContainer = document.querySelector('.my-tasks')
	let spanElement = document.createElement('span');

	spanElement.innerHTML = task;
	taskContainer.appendChild(spanElement);
}
addTask ('Dormir');

// Exercicio 8
function addColorLegend (color) {
	let taskContainer = document.querySelector('.my-tasks');
	let createDiv = document.createElement('div');
	createDiv.className = 'task';
	createDiv.style.backgroundColor = color;
	taskContainer.appendChild(createDiv);
}
addColorLegend ('blue')