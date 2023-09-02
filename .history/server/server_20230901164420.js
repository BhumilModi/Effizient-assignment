const express = require("express");
const dotenv = require("dotenv").config();
const cors = require('cors');
const emailRoute = require("./routes/emailRoute");

const app = express();

const port = process.env.SERVER_PORT || 5000;

app.listen(port, () => {
  console.log("Server listening on port : " + port);
});

app.use(cors())
app.use(express.json());
app.use("/", emailRoute);
