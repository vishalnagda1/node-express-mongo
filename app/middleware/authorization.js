const jwt = require('jsonwebtoken');
// eslint-disable-next-line
const keys = require('../../config/keys');
const { getUser } = require('../apis/user/services');

module.exports = async (request, response, next) => {
  const { 'x-access-token': token } = request.cookies;
  if (!token) {
    return response.status(401).json({ message: 'Unauthorized!' });
  }
  try {
    const { privateKey } = keys.jwt;
    const data = jwt.verify(token, privateKey);

    const { id, email, name, mobileNumber } = await getUser(data.id);
    const user = { id, email, name, mobileNumber };

    // storing user details to access in controller
    request.user = user;

    return next();
  } catch (err) {
    return response.status(401).json({ message: err.message });
  }
};
