const express = require("express");
const mongoose = require("mongoose");
const itemRoutes = require("./routes/itemRoutes");

// express app
const app = express();

// database connection
require("dotenv").config();
const PORT = process.env.PORT;

const dbURI = process.env.MONGODB_URI;
mongoose
  .connect(dbURI)
  .then((result) =>
    app.listen(PORT, console.log(`Server running on port ${PORT}`)),
  )
  .catch((err) => console.error(err));

app.use(express.json());

app.use("/items", itemRoutes);

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.use((err, req, res, next) => {
  console.error("Unhandled error:,", err);
  res.status(500).json({ error: "Internal server error" });
});
