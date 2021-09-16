const selectEstado = document.getElementById('select-estado');
const buttonSubmit = document.getElementById('submit');
const estadosBrasil = ['', 'Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 
    'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 
    'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 
    'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 
    'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 
    'São Paulo', 'Sergipe', 'Tocantins']

function addOptionsEstado() {
  for (let i = 0; i < estadosBrasil.length; i += 1) {
    const createOptions = document.createElement('option');
    createOptions.innerText = estadosBrasil[i];
    createOptions.setAttribute('value', estadosBrasil[i].toLowerCase())
    selectEstado.appendChild(createOptions);
  }
}
addOptionsEstado();

function test(e) {
  e.preventDefault();
}

buttonSubmit.addEventListener('click', test);