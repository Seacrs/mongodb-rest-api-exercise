const express = require("express");
const itemsController = require("../controllers/itemController");

const router = express.Router();

router.get("/", itemsController.getItems)

module.exports = router;
