import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AddMenuItem.css"; // Import the CSS file
import Navbar from "../Navbar/Navbar";

const AddMenuItem = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [menus, setMenus] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await fetch(
          "https://menu-app-backend-0gdw.onrender.com/api/menu"
        );
        if (response.ok) {
          const data = await response.json();
          setMenus(data);
        } else {
          console.error("Failed to fetch menus");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchMenus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newMenuItem = { menuId: selectedMenu, name, description, price };

    try {
      const response = await fetch(
        "https://menu-app-backend-0gdw.onrender.com/api/menu/add-item",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newMenuItem),
        }
      );

      if (response.ok) {
        alert("Menu Item added successfully!");
        navigate("/admin");
      } else {
        alert("Failed to add menu item");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while adding the menu item");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="add-menu-item-container">
        <form className="add-menu-item-form" onSubmit={handleSubmit}>
          <h2 className="add-menu-item-title">Add Menu Item</h2>
          <div className="form-group">
            <label className="form-label">Menu</label>
            <select
              className="form-select"
              value={selectedMenu}
              onChange={(e) => setSelectedMenu(e.target.value)}
              required
            >
              <option value="">Select a menu</option>
              {menus.map((menu) => (
                <option key={menu._id} value={menu._id}>
                  {menu.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Item Name</label>
            <input
              className="form-input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Description</label>
            <textarea
              className="form-textarea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label className="form-label">Price</label>
            <input
              className="form-input"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <button className="submit-button" type="submit">
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMenuItem;
