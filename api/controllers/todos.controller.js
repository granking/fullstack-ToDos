//Models
const { Todo } = require('../models/todo.model');

//Utils
const { catchAsync } = require('../utils/catchAsync');
const { AppError } = require('../utils/appError');

//simulate database with an array
// const todos = [
//     {id: 1, content: 'Learn NodeJS'}, 
//     {id: 2, content: 'Learn React'}, 
//     {id: 3, content: 'Learn MySQL'}];

exports.getAllTodos = catchAsync (async (req, res, next) => {
    //get data from db
    //SELECT * FROM todos
    const todos = await Todo.findAll();

    res.status(200).json({ 
        status: 'success', 
        data: { todos }});
});

exports.getTodoById = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    //SELECT * FROM todos WHERE id = id
    //const todo = await Todo.findOne({ where: { id } });
    const todoExists = await Todo.findOne({ where: { id }});

    if (!todoExists) {
        return next(new AppError(`To Do doesn't exists`, 404));
    }

    res.status(200).json({ 
        status: 'success', 
        data: { todo } });
});

exports.createTodo = catchAsync(async (req, res, next) => {
    //get todo content from req.body
    const { content } = req.body;

    //INSER INTO todos(content) VALUES('hello)
    const newTodo = await Todo.create({ content , userId : 1 });

    //send newTodo to the client
    res.status(201).json({ 
        status: 'success', 
        data: { newTodo } });
    
});

exports.updateTodo = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const { content } =req.body;

    //find ToDo with the given Id
    const todoExists = await Todo.findOne({ where: { id }});

    if (!todoExists) {
        //Return error message
        // throw Error('ID invalid');
        // return res.status(404).json({ status: 'fail', message: 'Id invalid'});
        return next(new AppError('To Do does not exists', 404));
    }
    // set new value of content
    //UPDATE todos SET content = 'fadda' WHERE id = id
    //await Todo.update({ content }, { where: { id }});
    await todoExists.update({ content });
    //return a response to the user
    res.status(204).json({ 
        status: 'success'});
    
});

exports.deleteTodo = catchAsync(async (req, res, next) => {
    const { id } = req.params;

    const todoExists = await Todo.findOne({ where: { id }});

    if (!todoExists) {
        return next(new AppError(`Can't delete To Do because it doesn't exists`, 404));
    }

    // DELETE FROM todos WHERE id = id
    // await Todo.destroy({ where: { id }});
    await todoExists.destroy();

    res.status(204).json({ 
        status: 'success'});
    
});
