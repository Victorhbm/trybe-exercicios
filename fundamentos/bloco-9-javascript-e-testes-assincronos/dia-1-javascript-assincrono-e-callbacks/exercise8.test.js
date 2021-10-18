// Verifique se a importação do arquivo correto está sendo feita.
const { expect } = require("@jest/globals");
const { getPokemonDetails } = require("./exercise8");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    getPokemonDetails((pokemon) => pokemon.name === 'teste', (filter) => {
      try {
        expect(filter).toBe('')
      }
    })
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    // Escreva aqui seu código
  });
});