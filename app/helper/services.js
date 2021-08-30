async function findOne(Model, data = {}) {
  return Model.findOne(data);
}

async function create(Model, data) {
  return new Model(data).save();
}

module.exports = { findOne, create };
