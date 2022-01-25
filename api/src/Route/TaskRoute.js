const express = require('express');
const TaskRoute = express.Router();

const TaskController = require('../controllers/TaskController');

TaskRoute.route('/tasks').get(TaskController.tasks);
TaskRoute.route('/create/task').post(TaskController.create);
TaskRoute.route('/edit/task/:id').put(TaskController.edite);
TaskRoute.route('/read/task/:id').get(TaskController.read);
TaskRoute.route('/completed/task/:id').get(TaskController.completed);
TaskRoute.route('/delete/task/:id').delete(TaskController.delete);

module.exports = TaskRoute;
