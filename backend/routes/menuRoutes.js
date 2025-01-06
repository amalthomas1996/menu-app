const express = require("express");
const router = express.Router();
const menuController = require("../controllers/menuController");



// Route for creating a new menu
router.post("/create", menuController.createMenu);

// Route for fetching all menus
router.get("/", menuController.getAllMenus);

// Route for adding items to a menu
router.post("/add-item", menuController.addMenuItem);


// Route for fetching menu items for a specific menu
router.get("/:menuId/items", menuController.getMenuItems);


module.exports = router;
