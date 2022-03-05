const express = require('express');
const cors = require('cors');

//Routers
const { todosRouter } = require('./routes/todos.router');

// controllers
const { globalErrorHandler } = require('./controllers/error.controller');

//Init app
const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use('*', cors());

//Endpoints
//http://localhost:4000/api/v1/todos
app.use('/api/v1/todos', todosRouter);

app.use(globalErrorHandler);

module.exports = { app };
