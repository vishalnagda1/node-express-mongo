const Joi = require('@hapi/joi');

module.exports = {
  signup: Joi.object({
    body: Joi.object({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(4).required(),
      confirmPassword: Joi.string()
        .required()
        .valid(Joi.ref('password'))
        .messages({ 'any.only': 'password does not match' }),
      mobileNumber: Joi.string()
        .min(8)
        .max(10)
        .regex(/^[0-9]+$/)
        .required()
        .messages({ 'string.pattern.base': 'Invalid mobile number' }),
    }),
  }),
  signin: Joi.object({
    body: Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(4).required(),
    }),
  }),
};
