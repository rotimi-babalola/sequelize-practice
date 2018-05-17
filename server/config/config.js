/* eslint no-undef:0 */
require('dotenv').config();

const envs = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres',
  },
  test: {
    username: process.env.TEST_USER,
    password: process.env.TEST_PASS,
    database: process.env.TEST_NAME,
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres',
  },
  production: {
    username: process.env.PD_USER,
    password: process.env.PD_PASS,
    database: process.env.PD_NAME,
    host: '127.0.0.1',
    dialect: 'postgres',
  },
};

// module.exports = envs[process.env.NODE_ENV || 'development'];
module.exports = envs[process.env.NODE_ENV || 'development'];
