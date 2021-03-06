import React from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component {
  render() {
    return (
      <section className='contents'>
        {conteudos.map((elem) => (
          <div key={elem.conteudo} className='card'>
            <h3>O conteúdo é: {elem.conteudo}</h3>
            <p>Status: {elem.status}</p>
            <p>Bloco: {elem.bloco}</p>
          </div>
        ))}
      </section>
    );
  }
}

export default Content;