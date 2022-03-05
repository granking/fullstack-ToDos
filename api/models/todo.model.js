const { DataTypes } = require('sequelize');
const { db } = require('../utils/database');

// define TODO model
const Todo = db.define('todos', {
    //define attributes
    id: {
        //define datatypes
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false, // NOT NULL
    },
    content: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING(15),
        allowNull: false,
        defaultValue: 'pending'
    }
},
{ timestamps: false }
);
//Export model
module.exports = { Todo };