const express = require("express");
const dotenv = require("dotenv").config();
const emailRoute = require("./routes/emailRoute");

const app = express();

const port = process.env.SERVER_PORT || 5000;

app.listen(port, () => {
  console.log("Server listening on port : " + port);
});

app.use(express.json());
app.use("/", emailRoute);
