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