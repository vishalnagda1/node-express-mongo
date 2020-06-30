const isEmpty = require("is-empty");
const validator = require("./validator");
const { errorParser } = require("./helper");

// Register a new user
function signup(request, response) {
  const { body } = request;
  const validData = validator.signup.validate({ body }, { abortEarly: false });

  if (!isEmpty(validData.error)) {
    return response.status(400).json(errorParser(validData.error));
  }

  return response.send(request.body);
}

// User login
function signin(request, response) {
  response.send(request.body);
}

module.exports = { signin, signup };
