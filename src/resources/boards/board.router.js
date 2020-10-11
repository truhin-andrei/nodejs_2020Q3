const router = require('express').Router();
const Board = require('./board.model');
const boardsService = require('./board.service');

router.route('/').get(async (req, res) => {
  const users = await boardsService.getAll();
  res.json(users.map(Board.toResponse));
});

router.route('/:id').get(async (req, res) => {
  try {
    const board = await boardsService.getById(req.params.id);
    res.json(Board.toResponse(board));
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.route('/').post(async (req, res) => {
  const board = await boardsService.create(
    new Board({
      title: req.body.title,
      columns: [...req.body.columns]
    })
  );
  res.json(Board.toResponse(board));
});

router.route('/:id').put(async (req, res) => {
  try {
    const updatedBoard = {
      title: req.body.title,
      columns: [...req.body.columns],
      id: req.params.id
    };
    const board = await boardsService.update(req.params.id, updatedBoard);
    res.json(Board.toResponse(board));
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.route('/:id').delete(async (req, res) => {
  try {
    const board = await boardsService.deleteById(req.params.id);
    res.json(Board.toResponse(board));
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = router;
