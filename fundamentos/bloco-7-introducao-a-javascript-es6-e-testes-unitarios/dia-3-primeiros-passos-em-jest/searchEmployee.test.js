const searchEmployee = require('./searchEmployee');

describe('Testa a função searchEmployee', () => {
  it('Verifica se a função existe', () => {
    expect(typeof(searchEmployee)).toBe('function');
  })

  it('Testa se o retorno da função é {id: "8579-6", firstName: "Ana"}', () => {
    expect(searchEmployee('8579-6', 'firstName')).toEqual({id: '8579-6', firstName: 'Ana'});
  })

  it('Testa se o retorno da função é {id: "4456-4", specialities: ["Context API", "RTL", "Bootstrap"]}', () => {
    expect(searchEmployee('4456-4', 'specialities')).toEqual({id: '4456-4', specialities: ['Context API', 'RTL', 'Bootstrap']});
  })

  it('Testa se o ID não constar irá retornar o erro "ID não idenificada"', () => {
    expect(() => {searchEmployee('1231-1', 'firstName')}).toThrow('ID não identificada');
  })

  it('Testa se a informação não existir irá retornar o erro "Informação indisponível"', () => {
    expect(() => {searchEmployee('4456-4', 'testeteste')}).toThrow('Informação indisponível');
  })
})