const authorization = require('./authorization');
const {limiter, signupLimiter} = require('./rate-limiter');

module.exports = { authorization, limiter, signupLimiter };
