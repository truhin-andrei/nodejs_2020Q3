const router = require('express').Router();
const Task = require('./task.model');
const tasksService = require('./task.service');

router.route('/').get(async (req, res) => {
  try {
    const tasks = await tasksService.getAllByBoardId();
    res.json(tasks.map(Task.toResponse));
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.route('/:id').get(async (req, res) => {
  try {
    const task = await tasksService.getById(req.params.id);
    res.json(Task.toResponse(task));
  } catch (error) {
    res.status(404).send(error.message);
  }
});

// router.route('/').post(async (req, res) => {
//   const board = await tasksService.create(
//     new Board({
//       title: req.body.title,
//       columns: [...req.body.columns]
//     })
//   );
//   res.json(Board.toResponse(board));
// });

// router.route('/:id').put(async (req, res) => {
//   try {
//     const updatedBoard = {
//       title: req.body.title,
//       columns: [...req.body.columns],
//       id: req.params.id
//     };
//     const board = await tasksService.update(req.params.id, updatedBoard);
//     res.json(Board.toResponse(board));
//   } catch (error) {
//     res.status(404).send(error.message);
//   }
// });

// router.route('/:id').delete(async (req, res) => {
//   try {
//     const board = await tasksService.deleteById(req.params.id);
//     res.json(Board.toResponse(board));
//   } catch (error) {
//     res.status(404).send(error.message);
//   }
// });

module.exports = router;
