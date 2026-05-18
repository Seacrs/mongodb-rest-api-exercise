// getItems, getItemById, createItem, updateItem, deleteItem

const { nanoid } = require("nanoid");
const Item = require("../models/item");

const getItems = (req, res) => {
  Item.find()
    .sort({ createdAt: -1 })
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(500).json({ error: err.message }));
};

module.exports = {
  getItems,
};
