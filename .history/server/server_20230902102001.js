const express = require("express");
const dotenv = require("dotenv").config();
const cors = require('cors');
const emailRoute = require("./routes/emailRoute");
const { SERVER_PORT } = require("./constants");

const app = express();

const port = SERVER_PORT;

app.listen(port, () => {
  console.log("Server listening on port : " + port);
});

app.use(cors())
app.use(express.json());
app.use("/", emailRoute);
