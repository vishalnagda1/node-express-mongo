const bcrypt = require("bcryptjs");
const validator = require("./validator");
const { errorParser } = require("./helper");
const { findUserByEmail, createUser } = require("./services");

// Register a new user
async function signup(request, response) {
  try {
    const { body } = request;

    // validate data
    const { error } = validator.signup.validate(
      { body },
      { abortEarly: false }
    );

    if (error) {
      return response.status(400).json(errorParser(error));
    }

    // Check if user exists
    if (await findUserByEmail(body.email)) {
      return response.status(409).json({ email: "Email already exists" });
    }

    // Hash password before saving in database
    const salt = await bcrypt.genSalt(10);
    body.password = await bcrypt.hash(body.password, salt);

    // Creating a new user and return
    return response.json(await createUser(body));
  } catch (err) {
    return response.status(422).json(err);
  }
}

// User login
function signin(request, response) {
  response.send(request.body);
}

module.exports = { signin, signup };
