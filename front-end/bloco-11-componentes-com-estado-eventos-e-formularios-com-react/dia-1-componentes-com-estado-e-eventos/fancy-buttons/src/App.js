import './App.css';
import React from 'react';



class App extends React.Component {
  constructor() {
    super()

    this.handleClickVictor = this.handleClickVictor.bind(this);
    this.handleClickHugo = this.handleClickHugo.bind(this);
    this.handleClickBezerra = this.handleClickBezerra.bind(this);
  }

  handleClickVictor() {
    console.log('Victor');
  }
  
  handleClickHugo() {
    console.log('Hugo');
  }
  
  handleClickBezerra() {
    console.log('Bezerra');
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClickVictor}>Clique aqui!</button>
        <button onClick={this.handleClickHugo}>Clique aqui!</button>
        <button onClick={this.handleClickBezerra}>Clique aqui!</button>
      </div>
    );
  }
}

export default App;
