const isEmpty = require("is-empty");
const bcrypt = require("bcryptjs");
const validator = require("./validator");
const { errorParser } = require("./helper");

// Load user model
const User = require("./modal");

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
    if (await User.findOne({ email: body.email })) {
      return response.status(400).json({ email: "Email already exists" });
    }

    // Creating a new user object
    const newUser = new User({
      name: body.name,
      email: body.email,
      password: body.password,
      mobile_number: body.mobile_number,
    });

    // Hash password before saving in database
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(newUser.password, salt);
    const user = await newUser.save();
    return response.json(user);
  } catch (err) {
    return response.status(422).json(err);
  }
}

// User login
function signin(request, response) {
  response.send(request.body);
}

module.exports = { signin, signup };
