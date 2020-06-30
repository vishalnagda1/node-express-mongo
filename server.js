const express = require("express");
const mongoose = require("mongoose");

const routes = require("./routes");

// DB Config
const mongoURI = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.info("MongoDB successfully connected"))
  .catch((err) => console.error(err));

const app = express();

app.use(routes);

const port = process.env.PORT || 8000;
app.listen(port, () => console.info(`Server up and running on port ${port} !`));
