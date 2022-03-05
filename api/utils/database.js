const { Sequelize, DataTypes } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config({ path: 'config.env' });

// Connect to database
const db = new Sequelize({
    host: process.env.DB_HOST,
    dialect: 'postgres',
    database: process.env.DB,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    logging: false
});

module.exports = { db, DataTypes };