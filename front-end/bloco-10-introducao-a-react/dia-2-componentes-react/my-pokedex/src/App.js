import './App.css';
import Pokedex from './Pokedex';
import Pokemons from './data';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Pokedex</h1>
        <Pokedex pokemons={Pokemons}/>
      </div>
    );
  }
}

export default App;
