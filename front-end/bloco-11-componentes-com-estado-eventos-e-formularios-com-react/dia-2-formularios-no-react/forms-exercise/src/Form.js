import React from 'react';

class Form extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      tecnologia: '',
      nome: '',
      idade: 0,
      descricao: ''
    }
  }

  handleChange(event) {
    this.setState({
      tecnologia: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>Formulário</h1>
        <form>
          <select name="tecnologia" id="tecnologia" value={this.state.tecnologia} onChange={this.handleChange}>
            <option>HTML</option>
            <option>CSS</option>
            <option>JavaScript</option>
            <option>React</option>
          </select>

          <label for="nome">
            Nome:
            <input id="nome" name="nome" type="text" />
          </label>

          <label for="idade">
            idade:
            <input id="idade" name="idade" type="number" />
          </label>

          <textarea name="descricao" id="descricao" cols="20" rows="2"></textarea>
        </form>
      </div>
    )
  }
}

export default Form;