const Joi = require("@hapi/joi");

module.exports = {
  signup: Joi.object({
    body: Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().length(4).required(),
    }),
  }),
};
