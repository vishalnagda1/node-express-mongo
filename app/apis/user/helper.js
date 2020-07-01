// Parse JOI errors
const errorParser = (error) => {
  let errorObj = {};
  error.details.map((error) => {
    const { context, message } = error;
    errorObj[context.key] = message.replace(`"${context.label}"`, context.key.replace(/_|-/g, ' '));
  });
  return errorObj;
};

module.exports = { errorParser };
