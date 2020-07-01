async function findOne(Model, data = {}) {
  return await Model.findOne(data);
}

async function create(Model, data) {
  return await new Model(data).save();
}

module.exports = { findOne, create };
