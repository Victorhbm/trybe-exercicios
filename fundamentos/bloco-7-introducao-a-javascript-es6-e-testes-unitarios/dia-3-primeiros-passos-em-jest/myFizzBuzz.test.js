const myFizzBuzz = require('./myFizzBuzz');

describe('Testa a função myFizzBuzz', () => {
  it('Verifica se o numero for divisível por 3 e 5 retorna fizzBuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  })

  it('Verifica se o numero for divisível apenas por 3 retorna fizz', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  })

  it('Verifica se o numero for divisível apenas por 5 retorna buzz', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  })

  it('Verifica se o numero não for divisível por 3 e nem por 5 retorna o numero', () => {
    expect(myFizzBuzz(8)).toBe(8);
  })

  it('Verifica se não for um número retorna false', () => {
    expect(myFizzBuzz('10')).toBe(false);
  })
})