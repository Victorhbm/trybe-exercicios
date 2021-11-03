import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { pokemon: { name, type, averageWeight, image } } = this.props;

    return (
      <section className="pokemon">
        <div className="info-container">
          <h2 className="poke-title">{name}</h2>
          <p>{type}</p>
          <p>Peso: {averageWeight.value} {averageWeight.measurementUnit}</p>
        </div>
        <div className="info-container">
          <img className="pokemon-image" src={image} alt={'Imagem do ' + name}></img>
        </div>
      </section>
    );
  }
}

export default Pokemon;