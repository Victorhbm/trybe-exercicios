const express = require('express');
const bodyParser = require('body-parser');
const { getSimpsons, setSimpsons } = require('./services');

const app = express();

app.use(bodyParser.json());

app.get('/ping', (_req, res) => {
  const obj = { message: 'pong' }
  res.json(obj);
});

app.post('/hello', (req, res) => {
  const { name } = req.body;

  res.status(200).json({ message: `Hello, ${name}!` });
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;

  if (+age > 17) {
    res.status(200).json({ message: `Hello, ${name}!` });
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
});

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;

  res.status(200).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade!` });
});

app.get('/simpsons', async (_req, res) => {
  try {
    const simpsons = await getSimpsons();

    res.status(200).json(simpsons);
  } catch (err) {
    console.log(err);
  }
});

app.get('/simpsons/:id', async (req, res) => {
  const simpsons = await getSimpsons();
  const { id } = req.params;

  const findSimpson = simpsons.find((e) => e.id === id);

  if (findSimpson) {
    res.status(202).json(findSimpson);
  } else {
    res.status(404).json({ message: 'simpson not found' });
  }
});

app.post('/simpsons', async (req, res) => {
  const { id, name } = req.body;
  const simpsons = await getSimpsons();

  const findSimpson = simpsons.find((e) => e.id === id);
  if (findSimpson) {
    res.status(409).json({ message: 'id already exists' });
  } else {
    simpsons.push({ id, name });
    await setSimpsons(simpsons);
    res.status(204).end();
  };
});

app.listen('3000', () => console.log('Rodando na porta 3000'));