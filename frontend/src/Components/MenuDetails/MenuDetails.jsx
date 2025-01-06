import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MenuDetails.css";

const MenuDetails = ({ match }) => {
  const [menu, setMenu] = useState(null); // Store the menu
  const [menuItems, setMenuItems] = useState([]); // Store the menu items
  const menuId = match.params.menuId; // Get menu ID from the URL (useRouteMatch for React Router)

  useEffect(() => {
    // Fetch the menu details and items
    const fetchMenuData = async () => {
      try {
        // Fetch the menu details
        const menuResponse = await fetch(
          `http://localhost:5000/api/menu/${menuId}`
        );
        const menuData = await menuResponse.json();
        setMenu(menuData);

        // Fetch the menu items
        const itemsResponse = await fetch(
          `http://localhost:5000/api/menu/${menuId}/items`
        );
        const itemsData = await itemsResponse.json();
        setMenuItems(itemsData); // Store menu items
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };

    fetchMenuData();
  }, [menuId]); // Fetch new data when menuId changes

  // Split the items into two columns dynamically
  const leftColumn = menuItems.filter((_, index) => index % 2 === 0); // Even-indexed items
  const rightColumn = menuItems.filter((_, index) => index % 2 !== 0); // Odd-indexed items

  return (
    <div className="menu-details-container">
      {menu ? (
        <>
          <div className="menu-header">
            <h2>{menu.name}</h2>
            <p>{menu.description}</p>
          </div>

          <div className="menu-columns">
            <div className="menu-column menu-column-left">
              {leftColumn.map((item, index) => (
                <div className="menu-item" key={index}>
                  <div className="menu-item-row">
                    <h3>{item.name}</h3>
                    <span className="menu-dots"></span>
                    <span>{item.price}</span>
                  </div>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>

            <div className="menu-column menu-column-right">
              {rightColumn.map((item, index) => (
                <div className="menu-item" key={index}>
                  <div className="menu-item-row">
                    <h3>{item.name}</h3>
                    <span className="menu-dots"></span>
                    <span>{item.price}</span>
                  </div>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Optional: Display images related to the menu */}
          <div className="menu-images">
            <img
              src="left-drink-image.png"
              alt="Left Drink"
              className="menu-image-left"
            />
            <img
              src="right-drink-image.png"
              alt="Right Drink"
              className="menu-image-right"
            />
          </div>
        </>
      ) : (
        <p>Loading menu...</p>
      )}
    </div>
  );
};

export default MenuDetails;
