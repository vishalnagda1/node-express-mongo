async function findOne(Model, data = {}, options = {}) {
  return Model.findOne(data, options);
}

async function create(Model, data) {
  return new Model(data).save();
}

module.exports = { findOne, create };
