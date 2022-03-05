const express = require('express');

//Controllers
const { getAllTodos, createTodo, getTodoById, updateTodo, deleteTodo } = require('../controllers/todos.controller');

const router = express.Router();

//resumen de rutas similares
router.route('/').get(getAllTodos).post(createTodo);
router.route('/:id').get(getTodoById).patch(updateTodo).delete(deleteTodo);

//fetch all posts
//router.get('/', getAllTodos);

//Create new todo
// router.post('/', createTodo);

//Update todo (patch)
// router.patch('/:id', updateTodo);

//Delete todo (delete)
// router.delete('/:id', deleteTodo);

//export default router
module.exports = { todosRouter: router };

//export const router = router
//exports.todosRouter = router;