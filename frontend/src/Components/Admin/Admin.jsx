import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Admin.css"; // Import the CSS file for styling

const Admin = () => {
  const [menus, setMenus] = useState([]);
  const [menuItems, setMenuItems] = useState({});

  // Fetch menus
  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/menu");
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

  // Fetch menu items when a menu is selected
  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/menu");
        if (response.ok) {
          const data = await response.json();
          setMenus(data);

          // After fetching menus, fetch the menu items for each menu
          for (let menu of data) {
            const itemResponse = await fetch(
              `http://localhost:5000/api/menu/${menu._id}/items`
            );
            if (itemResponse.ok) {
              const itemData = await itemResponse.json();
              setMenuItems((prevItems) => ({
                ...prevItems,
                [menu._id]: itemData,
              }));
            }
          }
        } else {
          console.error("Failed to fetch menus");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchMenus();
  }, []);

  return (
    <div className="admin-container">
      <h2 className="admin-title">Admin Dashboard</h2>
      <div className="admin-actions">
        <Link to="/addmenu" className="admin-link add-menu-btn">
          Add New Menu
        </Link>
        <Link to="/additem/:menuId" className="admin-link add-item-btn">
          Add New Menu Item
        </Link>
      </div>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Menu Name</th>
            <th>Menu Description</th>
            <th>Menu Items</th>
          </tr>
        </thead>
        <tbody>
          {menus.map((menu) => (
            <tr key={menu._id}>
              <td>{menu.name}</td>
              <td>{menu.description}</td>
              <td>
                <ol>
                  {menuItems[menu._id]?.map((item) => (
                    <li key={item._id}>
                      {item.name} - ${item.price}
                    </li>
                  ))}
                </ol>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
