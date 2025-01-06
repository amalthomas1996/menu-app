import React, { useEffect, useState } from "react";
import "./MenuDetails.css";
import leftimg from "../../assets/left-img.png";
import rightimg from "../../assets/right-img.png";

const MenuDetails = ({ activeMenuId }) => {
  const [menuItems, setMenuItems] = useState([]);
  const [menuName, setMenuName] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenuDetails = async () => {
      if (!activeMenuId) return;

      try {
        // Fetch menu name
        const menuResponse = await fetch(
          `http://localhost:5000/api/menu/${activeMenuId}`
        );
        if (menuResponse.ok) {
          const menuData = await menuResponse.json();
          setMenuName(menuData.name);
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
          setMenuItems(itemsData);
        } else {
          const errorData = await itemsResponse.json();
          setError(`Failed to fetch menu items: ${errorData.message}`);
        }
      } catch (error) {
        setError("An error occurred while fetching data");
      }
    };

    fetchMenuDetails();
  }, [activeMenuId]);

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="menu-details-container">
      <div className="menu-container-wrapper">
        <h2 className="menu-title">{menuName}</h2>
        <img
          src={leftimg}
          alt="Top Left Decoration"
          className="top-left-image"
        />
        <img
          src={rightimg}
          alt="Bottom Right Decoration"
          className="bottom-right-image"
        />
        {menuItems.length > 0 ? (
          <div className="menu-item-container">
            {menuItems.map((item, index) => (
              <div className="menu-item" key={item._id}>
                <div className="item-header">
                  <span className="item-name">{item.name}</span>
                  <span className="menu-dots"></span>
                  <span className="item-price">${item.price}</span>
                </div>
                <p className="item-description">{item.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-items">No items available for this menu.</p>
        )}
      </div>
    </div>
  );
};

export default MenuDetails;
