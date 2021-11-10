import './App.css';

const brasilianStates = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 
  'Ceará', 'Distrito Federal', 'Espirito Santo', 'Goiás', 'Maranhão',  'Mato Grosso do Sul', 'Mato Grosso', 'Minas Gerais', 'Pará', 'Paraíba',
  'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 
  'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo',
  'Sergipe', 'Tocantins']

function App() {
  return (
    <form>
      <fieldset>
        <label htmlFor="nome">
          Nome:
          <input name="nome" id="nome" type="text" maxLength="40" required />
        </label>

        <label htmlFor="email">
          Email:
          <input name="email" id="email" type="email" maxLength="50" required />
        </label>

        <label htmlFor="endereco">
          Endereço:
          <input name="endereco" id="endereco" type="text" maxLength="200" required />
        </label>

        <label htmlFor="cidade">
          Cidade:
          <input name="cidade" id="cidade" type="text" maxLength="28" required />
        </label>

        <label htmlFor="estado">Estado:</label>
        <select name="estado" id="estado">
          {
            brasilianStates.map((state) => (
              <option 
                key={state} 
                value={
                  state
                  .normalize('NFD')
                  .replace(/[\u0300-\u036f]/g, "")
                  .toLowerCase()
                  .split(' ').join('')
                }
              >
                {state}
              </option>
            ))
          }
        </select>

        <span>Tipo:</span>
        <label htmlFor="casa">
          <input name="tipo" id="casa" type="radio" />
          Casa
        </label>
        <label htmlFor="apartamento">
          <input name="tipo" id="apartamento" type="radio" />
          Apartamento
        </label>
      </fieldset>

      <fieldset>
        <label htmlFor="resumo">Resumo do Currículo:</label>
        <textarea maxLength="1000" name="resumo" id="resumo" cols="30" rows="5" required />

        <label htmlFor="cargo">Cargo:</label>
        <textarea maxLength="40" name="cargo" id="cargo" cols="30" rows="5" required />
      </fieldset>

      <button type="submit">Enviar</button>
    </form>
  );
}

export default App;
