const router = require("express").Router();
const controller = require("./controller");

router.post("/signup", controller.signup);
router.post("/signin", controller.signin);

module.exports = router;
