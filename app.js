const express = require("express");
const mongoose = require("mongoose");

// express app
const app = express();

const PORT = process.env.PORT;

// database connection
require('dotenv').config();

const dbURI = process.env.MONGODB_URI;
mongoose
  .connect(dbURI)
  .then((result) => app.listen(PORT))
  .catch((err) => console.error(err));
