let creds;
if (process.env.NODE_ENV === 'production') {
  creds = require('../creds');
} else {
  creds = require('../creds.dev');
}

const Sequelize = require('sequelize');

const DB_NAME = creds.DB_NAME;
const USER_NAME = creds.USER_NAME;
const PASSWORD = creds.PASSWORD;//first ph q no extra

const sequelize = new Sequelize(DB_NAME, USER_NAME, PASSWORD, {
    host: creds.host,
    dialect: 'mysql'
});

module.exports = sequelize;
