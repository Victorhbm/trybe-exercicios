const {encode, decode} = require('./playgroundFunctions')

describe('Testa a função encode', () => {
  it('Verifica se encode é uma função', () => {
    expect(typeof(encode)).toBe('function');
  })

  it('Verifica se "a, e, i, o, u" retorna "1, 2, 3, 4, 5"', () => {
    expect(encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5');
  })

  it('Verifica se "b, c, d, f, j" retorna "b, c, d, f, j"', () => {
    expect(encode('b, c, d, f, j')).toBe('b, c, d, f, j');
  })

  it('Ambas as strings possuem a mesma quantidade de caracteres', () => {
    expect(encode('a, e, i, o, u')).toHaveLength(13);
  })
})

describe('Testa a função decode', () => {
  it('Verifica se decode é uma função', () => {
    expect(typeof(decode)).toBe('function');
  })

  it('Verifica se "1, 2, 3, 4, 5" retorna "a, e, i, o, u"', () => {
    expect(decode('1, 2, 3, 4, 5')).toBe('a, e, i, o, u');
  })

  it('Verifica se "0, 6, 7, 8, 9" retorna "0, 6, 7, 8, 9, 10"', () => {
    expect(decode('0, 6, 7, 8, 9')).toBe('0, 6, 7, 8, 9');
  })

  it('Ambas as strings possuem a mesma quantidade de caracteres', () => {
    expect(decode('1, 2, 3, 4, 5')).toHaveLength(13);
  })
})