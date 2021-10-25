// githubApi.test.js

const fetch = require('node-fetch');

const getRepos = (url) => (
  fetch(url)
    .then((response) => response.json())
    .then((data) => data.map((repo) => repo.name))
);

// implemente seus testes aqui

describe('Testa a funcao getRepos', () => {
  test('Verifica se contem os repositorios todo-list e meme-generator', async () => {
    expect.assertions(2);
    const getReposTest = await getRepos('https://api.github.com/orgs/tryber/repos');

    expect(getReposTest).toContain('sd-01-week4-5-project-todo-list');
    expect(getReposTest).toContain('sd-01-week4-5-project-meme-generator');
  });
});
