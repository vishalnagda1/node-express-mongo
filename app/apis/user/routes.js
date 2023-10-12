const router = require('express').Router();
const controller = require('./controller');
const { authorization, limiter, signupLimiter } = require('../../middleware');

router.post('/signup', signupLimiter, controller.signup);
router.post('/signin', controller.signin);
router.get('/user', limiter, authorization, controller.getUser);
router.post('/signout', controller.signout);

module.exports = router;
