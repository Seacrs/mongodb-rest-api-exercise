// getItems, getItemById, createItem, updateItem, deleteItem

const { nanoid } = require("nanoid");
const Item = require("../models/item");

const getItems = (req, res) => {
  Item.find()
    .sort({ createdAt: -1 })
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(500).json({ error: err.message }));
};

const getItemById = (req, res) => {
  const id = req.params.id;
  Item.findById(id)
    .then((result) => res.status(200).json(result))
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
  const { title, director, year, genre, rating } = req.body;

  if (!title || !year) {
    return res.status(400).json({ message: "Title and year are required" });
  }

  const data = { title, director, year, genre, rating };

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
  Item.findByIdAndDelete(req.params.id)
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(500).json({ error: err.message }));
};

module.exports = {
  getItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
};
