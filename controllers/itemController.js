// getItems, getItemById, createItem, updateItem, deleteItem
const mongoose = require("mongoose");
const Item = require("../models/item");

const getItems = (req, res) => {
  Item.find()
    .sort({ createdAt: -1 })
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(500).json({ error: err.message }));
};

const getItemById = (req, res) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid ID format" });
  }
  Item.findById(id)
    .then((result) => {
      if (!result) {
        return res.status(404).json({ message: "Item not found" });
      }
      res.status(200).json(result);
    })
    .catch((err) => res.status(500).json({ error: err.message }));
};

const createItem = (req, res) => {
  const item = new Item(req.body);
  item
    .save()
    .then((result) => res.status(201).json(result))
    .catch((err) => res.status(500).json({ error: err.message }));
};

const updateItem = (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid ID format" });
  }

  const { name, description, price } = req.body;

  if (!name || !description || !price) {
    return res
      .status(400)
      .json({ message: "Name, description, and price are required" });
  }

  const data = { name, description, price };

  Item.findByIdAndUpdate(id, data, { new: true })
    .then((result) => {
      if (!result) {
        return res.status(404).json({ message: "Item not found" });
      }
      res.status(200).json(result);
    })
    .catch((err) => res.status(500).json({ error: err.message }));
};

const deleteItem = (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid ID format" });
  }

  Item.findByIdAndDelete(req.params.id)
    .then((result) => {
      if (!result) {
        return res.status(404).json({ message: "Item not found" });
      }
      res.status(200).json({ message: "Item deleted successfully" });
    })
    .catch((err) => res.status(500).json({ error: err.message }));
};

module.exports = {
  getItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
};
