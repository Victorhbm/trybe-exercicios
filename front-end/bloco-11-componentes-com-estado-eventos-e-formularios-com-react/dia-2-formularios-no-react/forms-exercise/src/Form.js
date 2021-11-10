import React from 'react';
import Input from './components/Input';

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

          <Input name="nome" type="text" value={this.state.nome} onChange={this.handleChange}/>

          <Input name="idade" type="number" value={this.state.idade} onChange={this.handleChange}/>

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