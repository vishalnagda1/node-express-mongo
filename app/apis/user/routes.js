const router = require('express').Router();
const controller = require('./controller');

router.post('/signup', controller.signup);
router.post('/signin', controller.signin);
router.post('/signout', controller.signout);

module.exports = router;
