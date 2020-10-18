const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
});

router.route('/:id').get(async (req, res, next) => {
  try {
    const user = await usersService.getById(req.params.id);
    res.json(User.toResponse(user));
  } catch (error) {
    error.status = 404;
    return next(error);
  }
});

router.route('/').post(async (req, res) => {
  const user = await usersService.create(
    new User({
      login: req.body.login,
      name: req.body.name,
      password: req.body.password
    })
  );
  res.json(User.toResponse(user));
});

router.route('/:id').put(async (req, res, next) => {
  try {
    const updatedUser = {
      login: req.body.login,
      name: req.body.name,
      password: req.body.password,
      id: req.params.id
    };
    const user = await usersService.update(req.params.id, updatedUser);
    res.json(User.toResponse(user));
  } catch (error) {
    error.status = 404;
    return next(error);
  }
});

router.route('/:id').delete(async (req, res, next) => {
  try {
    const user = await usersService.deleteById(req.params.id);
    res.json(User.toResponse(user));
  } catch (error) {
    error.status = 404;
    return next(error);
  }
});

module.exports = router;
