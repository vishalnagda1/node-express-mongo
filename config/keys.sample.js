module.exports = {
  mongoURI: "mongodb+srv://username:password@localhost:27017/database-name?retryWrites=true&w=majority",
  jwt: {
    issuer: "DZI",
    privateKey: "somePrivateKey",
    expiry: "7d"
  }
};
