const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const routes = require("./routes");

// DB Config
// eslint-disable-next-line
const { mongoURI } = require('./config/keys');

// Connect to MongoDB
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.info("MongoDB successfully connected"))
  .catch((err) => console.error(err));

mongoose.set("debug", process.env.NODE_ENV === "development");

const app = express();

// parse body params and attache them to req.body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// parse cookie
app.use(cookieParser());

// mounting app routes
app.use(routes);

const port = process.env.PORT || 8000;
app.listen(port, () => console.info(`Server up and running on port ${port} !`));
