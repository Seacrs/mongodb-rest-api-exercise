const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  director: {
    type: String,
    trim: true,
  },
  year: {
    type: Number,
    required: true,
    min: 1888,
    max: new Date().getFullYear(),
  },
  genre: {
    type: String,
    trim: true,
    enum: [
      "Action",
      "Comedy",
      "Drama",
      "Horror",
      "Sci-Fi",
      "Romance",
      "Documentary",
      "Other",
    ],
  },
  rating: {
    type: Number,
    min: 0,
    max: 10,
  },
});

const Item = mongoose.model("Item", itemSchema);
module.exports = Item;
