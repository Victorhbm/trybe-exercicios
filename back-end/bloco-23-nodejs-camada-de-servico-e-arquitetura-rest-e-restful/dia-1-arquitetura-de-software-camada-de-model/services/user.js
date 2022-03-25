const message = (campo) => `O campo ${campo} é obrigatório!`;

const validateUserFirstName = (req, res, next) => {
  const { firstName } = req.body;

  if (!firstName) {
    return res.status(400).json({
      error: true,
      message: message('firstName'),
    });
  }

  if (firstName.length < 3 || typeof firstName !== 'string') {
    return res.status(400).json({
      error: true,
      message: 'Dados invalidos',
    });
  }

  next();
};

const validateUserLastName = (req, res, next) => {
  const { lastName } = req.body;

  if (!lastName) {
    return res.status(400).json({
      error: true,
      message: message('lastName'),
    });
  }

  if (lastName.length < 3 || typeof lastName !== 'string') {
    return res.status(400).json({
      error: true,
      message: 'Dados invalidos',
    });
  }

  next();
};

const validateUserEmail = (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({
      error: true,
      message: message('email'),
    });
  }

  if (email.length < 3 || typeof email !== 'string') {
    return res.status(400).json({
      error: true,
      message: 'Dados invalidos',
    });
  }

  next();
};

const validateUserPassword = (req, res, next) => {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({
      error: true,
      message: message('password'),
    });
  }

  if (password.length < 6) {
    return res.status(400).json({
      error: true,
      message: 'O campo password deve ter pelo menos 6 caracteres',
    });
  }

  if (typeof password !== 'string') {
    return res.status(400).json({
      message: 'O campo password deve ser uma string',
    });
  }

  next();
};

module.exports = {
  validateUserFirstName,
  validateUserLastName,
  validateUserEmail,
  validateUserPassword,
};
