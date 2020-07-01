const isEmpty = require("is-empty");
const bcrypt = require("bcryptjs");
const validator = require("./validator");
const { errorParser } = require("./helper");

// Load user model
const User = require("./modal");

// Register a new user
function signup(request, response) {
  const { body } = request;
  const validData = validator.signup.validate({ body }, { abortEarly: false });

  if (!isEmpty(validData.error)) {
    return response.status(400).json(errorParser(validData.error));
  }

  User.findOne({ email: body.email }).then((user) => {
    if (user) {
      return response.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        name: body.name,
        email: body.email,
        password: body.password,
        mobile_number: body.mobile_number,
      });

      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => response.json(user))
            .catch((err) => response.status(400).json(err));
        });
      });
    }
  });
}

// User login
function signin(request, response) {
  response.send(request.body);
}

module.exports = { signin, signup };
