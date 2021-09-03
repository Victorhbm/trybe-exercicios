document.getElementById("header-container").style.backgroundColor = '#36C18C';
document.querySelector(".emergency-tasks").style.backgroundColor = '#F89F84';

let emergencySubtitle = document.querySelectorAll(".emergency-subtitle");
for (let index = 0; index < emergencySubtitle.length; index += 1) {
	emergencySubtitle[index].style.backgroundColor = '#a500f3'
}

let noEmergencyTasks = document.querySelector('.no-emergency-tasks');
noEmergencyTasks.style.backgroundColor = "#F9DB5E";

let noEmergencySubtitle = document.querySelectorAll('.no-emergency-tasks h3');
for (let i = 0; i < noEmergencySubtitle.length; i += 1) {
	noEmergencySubtitle[i].style.backgroundColor = '#232525';
}

let footerContainer = document.getElementById('footer-container');
footerContainer.style.backgroundColor = '#0A3533';