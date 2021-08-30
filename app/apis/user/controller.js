const bcrypt = require("bcryptjs");
const validator = require("./validator");
const { errorParser, signJWT } = require("./helper");
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
      return response.status(409).json({ email: "email already exists" });
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
async function signin(request, response) {
  try {
    const { body } = request;

    // validate data
    const { error } = validator.signin.validate(
      { body },
      { abortEarly: false }
    );

    if (error) {
      return response.status(400).json(errorParser(error));
    }

    // Find the user
    const user = await findUserByEmail(body.email);

    // Check if user exists
    if (!user) {
      return response.status(404).json({ email: "email not found" });
    }

    // Check password
    if (!bcrypt.compareSync(body.password, user.password)) {
      return response.status(400).json({ email: "invalid credentials" });
    }

    // sign JWT and send it in cookie
    response.cookie("x-access-token", signJWT(user));

    return response.json({
      name: user.name,
      email: user.email,
      mobile_number: user.mobile_number,
    });
  } catch (err) {
    return response.status(422).json(err);
  }
}

async function signout(request, response) {
  response.cookie("x-access-token", "deleted", {
    expires: new Date(Date.now()),
  });
  response.clearCookie();
  return response.json({ message: "signout success" });
}

module.exports = { signin, signup, signout };
