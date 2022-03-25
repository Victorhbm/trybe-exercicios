const express = require('express');
const { createUser, getUsers, getUserById, updateUser } = require('./models/user');
const {
  validateUserFirstName,
  validateUserLastName,
  validateUserEmail,
  validateUserPassword,
} = require('./services/user');

const app = express();
const port = 3000;

app.use(express.json());

app.post(
  '/user',
  validateUserFirstName,
  validateUserLastName,
  validateUserEmail,
  validateUserPassword,
  async (req, res) => {
    const userCreated = await createUser(req.body);

    return res.status(201).json(userCreated);
  }
);

app.get('/user', async (_req, res) => {
  const users = await getUsers();

  res.status(200).json(users);
});

app.get('/user/:id', async (req, res) => {
  const { id } = req.params;

  const user = await getUserById(id);

  if (!user)
    return res.status(404).json({
      error: true,
      message: 'Usuário não encontrado',
    });

  res.status(200).json(user);
});

app.put(
  '/user/:id',
  validateUserFirstName,
  validateUserLastName,
  validateUserEmail,
  validateUserPassword,
  async (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, email, password } = req.body;

    const newUser = await updateUser({
      id,
      firstName,
      lastName,
      email,
      password,
    });

    if (!newUser) {
      res.status(404).json({
        error: true,
        message: 'Usuário não encontrado'
      });
    }

    res.status(200).json(newUser);
  }
);
  
app.listen(port, () => console.log(`App listening on port ${port}!`));
