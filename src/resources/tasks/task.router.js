const router = require('express').Router({ mergeParams: true });

const Task = require('./task.model');
const tasksService = require('./task.service');

router.route('/').get(async (req, res, next) => {
  try {
    const tasks = await tasksService.getAllByBoardId();
    res.json(tasks.map(Task.toResponse));
  } catch (error) {
    error.status = 404;
    return next(error);
  }
});

router.route('/:id').get(async (req, res, next) => {
  try {
    const task = await tasksService.getById(req.params.id);
    res.json(Task.toResponse(task));
  } catch (error) {
    error.status = 404;
    return next(error);
  }
});

router.route('/').post(async (req, res) => {
  const task = await tasksService.create(
    new Task({
      title: req.body.title,
      order: req.body.order,
      description: req.body.description,
      userId: req.body.userId,
      boardId: req.baseUrl.split('/')[2],
      columnId: req.body.columnId
    })
  );
  res.json(Task.toResponse(task));
});

router.route('/:id').put(async (req, res, next) => {
  try {
    const updatedTask = {
      title: req.body.title,
      order: req.body.order,
      description: req.body.description,
      userId: req.body.userId,
      boardId: req.body.boardId,
      columnId: req.body.columnId,
      id: req.params.id
    };
    const task = await tasksService.update(req.params.id, updatedTask);
    res.json(Task.toResponse(task));
  } catch (error) {
    error.status = 404;
    return next(error);
  }
});

router.route('/:id').delete(async (req, res, next) => {
  try {
    const task = await tasksService.deleteById(req.params.id);
    res.json(Task.toResponse(task));
  } catch (error) {
    error.status = 404;
    return next(error);
  }
});

module.exports = router;
