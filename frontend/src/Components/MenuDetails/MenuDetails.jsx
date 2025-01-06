import React, { useEffect, useState } from "react";
import "./MenuDetails.css";

const MenuDetails = ({ activeMenuId }) => {
  const [menuItems, setMenuItems] = useState([]); // State for menu items
  const [menuName, setMenuName] = useState(""); // State for the menu name
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // State to capture error messages

  useEffect(() => {
    const fetchMenuDetails = async () => {
      if (!activeMenuId) return; // If no menu selected, return early

      try {
        setLoading(true); // Set loading state when fetching data

        // Fetch the menu details (name and items) using the activeMenuId
        const menuResponse = await fetch(
          `http://localhost:5000/api/menu/${activeMenuId}`
        );
        if (menuResponse.ok) {
          const menuData = await menuResponse.json();
          setMenuName(menuData.name); // Set the menu name based on the fetched data
        } else {
          const errorData = await menuResponse.json();
          setError(`Failed to fetch menu: ${errorData.message}`);
        }

        // Fetch the menu items
        const itemsResponse = await fetch(
          `http://localhost:5000/api/menu/${activeMenuId}/items`
        );
        if (itemsResponse.ok) {
          const itemsData = await itemsResponse.json();
          setMenuItems(itemsData); // Set menu items based on activeMenuId
        } else {
          const errorData = await itemsResponse.json();
          setError(`Failed to fetch menu items: ${errorData.message}`);
        }
      } catch (error) {
        setError("An error occurred while fetching data");
      } finally {
        setLoading(false); // Stop loading when finished
      }
    };

    fetchMenuDetails();
  }, [activeMenuId]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>; // Show error message if there's an issue
  }

  return (
    <div className="menu-details-container">
      {/* Dynamic Menu Title */}
      <h2 className="menu-title">{menuName}</h2>

      {/* Displaying dynamic menu name */}
      {menuItems.length > 0 ? (
        <div className="menu-item-container">
          {menuItems.map((item, index) => (
            <div className="menu-item" key={item._id}>
              {/* Item Name and Price with Dots */}
              <div className="item-header">
                <span className="item-name">{item.name}</span>
                <span className="menu-dots"></span>
                <span className="item-price">${item.price}</span>
              </div>

              {/* Item Description */}
              <p className="item-description">{item.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-items">No items available for this menu.</p>
      )}
    </div>
  );
};

export default MenuDetails;
