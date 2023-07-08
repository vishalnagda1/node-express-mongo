const router = require('express').Router();
const controller = require('./controller');
const { authorization } = require('../../middleware');

router.post('/signup', controller.signup);
router.post('/signin', controller.signin);
router.get('/user', authorization, controller.getUser);
router.post('/signout', controller.signout);

module.exports = router;
