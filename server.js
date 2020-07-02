const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const routes = require("./routes");

// DB Config
const mongoURI = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.info("MongoDB successfully connected"))
  .catch((err) => console.error(err));

mongoose.set("debug", true);

const app = express();

// parse body params and attache them to req.body
app.use(bodyParser.json());

// parse cookie
app.use(cookieParser());

// mounting app routes
app.use(routes);

const port = process.env.PORT || 8000;
app.listen(port, () => console.info(`Server up and running on port ${port} !`));
