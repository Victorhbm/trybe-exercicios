import React from 'react';

class Form extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      tecnologia: '',
      nome: '',
      idade: 0,
      descricao: '',
      check: false
    }
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <h1>Formulário</h1>
        <form>
          <select 
            name="tecnologia" 
            id="tecnologia" 
            value={this.state.tecnologia} 
            onChange={this.handleChange}
          >
            <option>HTML</option>
            <option>CSS</option>
            <option>JavaScript</option>
            <option>React</option>
          </select>

          <label for="nome">
            Nome:
            <input 
              id="nome" 
              name="nome" 
              type="text" 
              value={this.state.nome}
              onChange={this.handleChange}
            />
          </label>

          <label for="idade">
            idade:
            <input 
              id="idade" 
              name="idade" 
              type="number" 
              value={this.state.idade}
              onChange={this.handleChange}
            />
          </label>

          <textarea 
            name="descricao" 
            id="descricao" 
            cols="20" 
            rows="2"
            value={this.state.descricao}
            onChange={this.handleChange}
          >
          </textarea>

          <input 
            id="check" 
            name="check" 
            type="checkbox" 
            value={this.state.check}
            onChange={this.handleChange}
          />
          
        </form>
      </div>
    )
  }
}

export default Form;