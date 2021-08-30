const jwt = require("jsonwebtoken");
// eslint-disable-next-line
const keys = require('../../../config/keys');

// Parse JOI errors
const errorParser = (error) => {
  const errorObj = {};
  error.details.forEach((err) => {
    const { context, message } = err;
    errorObj[context.key] = message.replace(
      `"${context.label}"`,
      context.key.replace(/_|-/g, " ")
    );
  });
  return errorObj;
};

const signJWT = (user) => {
  const { issuer, expiry, privateKey } = keys.jwt;
  const jwtOptions = {
    issuer,
    audience: String(user.id),
    expiresIn: expiry,
  };
  const data = {
    id: user.id,
    email: user.email,
  };
  return jwt.sign(data, privateKey, jwtOptions);
};

module.exports = { errorParser, signJWT };
