const router = require('express').Router();
const { signToken } = require('./login.Service');

router.route('/').post(async (req, res, next) => {
  try {
    const { login, password } = req.body;
    const token = await signToken(login, password);

    if (!token) {
      res.status(403).send('Forbidden');
    } else {
      return res.status(200).json({ token });
    }
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
