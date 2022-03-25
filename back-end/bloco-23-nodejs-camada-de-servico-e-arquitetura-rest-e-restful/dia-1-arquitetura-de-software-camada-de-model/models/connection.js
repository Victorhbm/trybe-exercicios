const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'victorhbm',
  password: 'Vi171364.',
  database: 'users_crud',
});

module.exports = connection;