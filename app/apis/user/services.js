const User = require("./model");
const { findOne, create } = require("../../helper/services");

async function findUserByEmail(email) {
  return await findOne(User, { email });
}

async function createUser(data) {
  const { name, email } = await create(User, data);
  return { name, email };
}

module.exports = { findUserByEmail, createUser };
