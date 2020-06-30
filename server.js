const express = require("express");
const routes = require("./routes");

const app = express();

app.use(routes);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));
