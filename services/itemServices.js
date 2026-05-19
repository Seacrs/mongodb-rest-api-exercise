const mongoose = require("mongoose");
const Item = require("../models/item");

const getAllItems = () => {
  return Item.find().sort({ createdAt: -1 });
};

const getItemById = (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("Invalid ID format");
  }
  return Item.findById(id);
};

const createItem = (data) => {
  const item = new Item(data);
  return item.save();
};

const updateItem = (id, data) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("Invalid ID format");
  }
  return Item.findByIdAndUpdate(id, data, { returnDocument: "after" });
};

const deleteItem = (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("Invalid ID format");
  }
  return Item.findByIdAndDelete(id);
};

module.exports = {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
};
