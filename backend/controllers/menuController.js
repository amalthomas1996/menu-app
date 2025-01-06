const Menu = require("../models/menuModel");
const MenuItem = require("../models/menuItemModel");

// Create a new menu
exports.createMenu = async (req, res) => {
  try {
    const { name, description } = req.body;
    const newMenu = new Menu({
      name,
      description,
    });
    await newMenu.save();
    res.status(201).json(newMenu);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Fetch all menus
exports.getAllMenus = async (req, res) => {
  try {
    const menus = await Menu.find(); // Fetch all menus
    res.status(200).json(menus); // Return the menus as response
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


// Add items to a menu
exports.addMenuItem = async (req, res) => {
  try {
    const { menuId, name, description, price } = req.body;

    // Find the menu by ID
    const menu = await Menu.findById(menuId);
    if (!menu) {
      return res.status(404).json({ message: "Menu not found" });
    }

    // Create a new menu item
    const newItem = new MenuItem({
      name,
      description,
      price,
    });

    await newItem.save();

    // Add the new item to the menu
    menu.items.push(newItem);
    await menu.save();

    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
// Fetch items for a specific menu
exports.getMenuItems = async (req, res) => {
  try {
    const menu = await Menu.findById(req.params.menuId).populate('items');
    if (!menu) {
      return res.status(404).json({ message: "Menu not found" });
    }
    res.status(200).json(menu.items); // Return the items in the menu
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
