const router = require("express").Router();

/** GET / or GET /health-check - Check server health */
router.get(["/", "/health-check"], (request, response) => {
  response.send("OK");
});

module.exports = router;
