const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const itemRoutes = require("./routes/itemRoutes");

require("dotenv").config();

const app = express();

app.use(helmet());
app.use(express.json());

const PORT = process.env.PORT;
const dbURI = process.env.MONGODB_URI;

mongoose
  .connect(dbURI)
  .then((result) =>
    app.listen(PORT, console.log(`Server running on port ${PORT}`)),
  )
  .catch((err) => console.error(err));

app.use("/items", itemRoutes);

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.use((err, req, res, next) => {
  console.error("Unhandled error:,", err);
  res.status(500).json({ error: "Internal server error" });
});
