const express = require("express");
const itemsController = require("../controllers/itemController");

const router = express.Router();

router.get("/", itemsController.getItems);
router.get("/:id", itemsController.getItemById);
router.post("/", itemsController.createItem);
router.put("/:id", itemsController.updateItem);
router.delete("/:id", itemsController.deleteItem);

module.exports = router;
