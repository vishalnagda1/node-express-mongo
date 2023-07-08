const User = require('./model');
const { findOne, create } = require('../../helper/services');

async function getUser(id, options = {}) {
  return findOne(User, { _id: id }, options);
}

async function findUserByEmail(email, options = {}) {
  return findOne(User, { email }, options);
}

async function createUser(data) {
  const { name, email } = await create(User, data);
  return { name, email };
}

module.exports = { findUserByEmail, createUser, getUser };
