const getTitle = document.getElementById('title');
const getButton = document.getElementById('button');
const getCounter = document.getElementById('counter');
getCounter.innerText = 0;
let clickCount = 0;

getButton.addEventListener('click', () => {
  clickCount += 1
  getCounter.innerText = clickCount;
});