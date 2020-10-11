const router = require('express').Router();
const Board = require('./board.model');
const boardsService = require('./board.service');

router.route('/').get(async (req, res) => {
  const users = await boardsService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(users.map(Board.toResponse));
});

// router.route('/:id').get(async (req, res) => {
//   try {
//     const user = await usersService.getById(req.params.id);
//     res.json(User.toResponse(user));
//   } catch (error) {
//     res.status(404).send(error.message);
//   }
// });

// router.route('/').post(async (req, res) => {
//   const user = await usersService.create(
//     new User({
//       login: req.body.login,
//       name: req.body.name,
//       password: req.body.password
//     })
//   );
//   res.json(User.toResponse(user));
// });

// router.route('/:id').put(async (req, res) => {
//   try {
//     const updatedUser = {
//       login: req.body.login,
//       name: req.body.name,
//       password: req.body.password,
//       id: req.params.id
//     };
//     const user = await usersService.update(req.params.id, updatedUser);
//     res.json(User.toResponse(user));
//   } catch (error) {
//     res.status(404).send(error.message);
//   }
// });

// router.route('/:id').delete(async (req, res) => {
//   try {
//     const user = await usersService.deleteById(req.params.id);
//     res.json(User.toResponse(user));
//   } catch (error) {
//     res.status(404).send(error.message);
//   }
// });

module.exports = router;
