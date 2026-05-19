const itemServices = require("../services/itemServices");

const getItems = (req, res) => {
  itemServices
    .getAllItems()
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(500).json({ error: err.message }));
};

const getItemById = (req, res) => {
  itemServices
    .getItemById(req.params.id)
    .then((result) => {
      if (!result) {
        return res.status(404).json({ message: "Item not found" });
      }
      res.status(200).json(result);
    })
    .catch((err) => res.status(500).json({ error: err.message }));
};

const createItem = (req, res) => {
  const { name, description, price } = req.body;
  itemServices
    .createItem({ name, description, price })
    .then((result) => res.status(201).json(result))
    .catch((err) => res.status(500).json({ error: err.message }));
};

const updateItem = (req, res) => {
  const { name, description, price } = req.body;

  if (!name || !description || !price) {
    return res
      .status(400)
      .json({ message: "Name, description, and price are required" });
  }

  itemServices
    .updateItem(req.params.id, { name, description, price })
    .then((result) => {
      if (!result) {
        return res.status(404).json({ message: "Item not found" });
      }
      res.status(200).json(result);
    })
    .catch((err) => res.status(500).json({ error: err.message }));
};

const deleteItem = (req, res) => {
  itemServices
    .deleteItem(req.params.id)
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
