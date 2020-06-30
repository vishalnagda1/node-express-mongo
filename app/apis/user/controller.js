/**
 * Get contained user using there credentials.
 * @returns {User}
 */
function signin(request, response) {
  response.send(request.body);
}

module.exports = { signin };
