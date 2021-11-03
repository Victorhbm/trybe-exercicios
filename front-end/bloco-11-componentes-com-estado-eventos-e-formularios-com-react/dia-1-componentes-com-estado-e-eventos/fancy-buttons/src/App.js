import './App.css';
import React from 'react';

function handleClickVictor() {
  console.log('Victor');
}

function handleClickHugo() {
  console.log('Hugo');
}

function handleClickBezerra() {
  console.log('Bezerra');
}

class App extends React.Component {
  render() {
    return (
      <div>
        <button onClick={handleClickVictor}>Clique aqui!</button>
        <button onClick={handleClickHugo}>Clique aqui!</button>
        <button onClick={handleClickBezerra}>Clique aqui!</button>
      </div>
    );
  }
}

export default App;
