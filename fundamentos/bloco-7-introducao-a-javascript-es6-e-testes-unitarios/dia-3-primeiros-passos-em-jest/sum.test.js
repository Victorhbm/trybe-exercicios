const sum = require('./sum');

describe('Testa a função sum', () => {
  it('Soma de 4 + 5 é 9', () => {
    expect(sum(4, 5)).toBe(9);
  })

  it('Soma de 0 + 0 é 0', () => {
    expect(sum(0, 0)).toBe(0);
  })

  it('Soma de 4 + "5" é um Error', () => {
    expect(() => {sum(4, "5")}).toThrow();
  })

  it('Soma de 4 + "5" é um Error Específico', () => {
    expect(() => {sum(4, "5")}).toThrowError(new Error('parameters must be numbers'));
  })
})