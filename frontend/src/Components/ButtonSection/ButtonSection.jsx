import React, { useState, useEffect } from "react";
import "./ButtonSection.css";
import MenuDetails from "../MenuDetails/MenuDetails";

const ButtonSection = () => {
  const [menus, setMenus] = useState([]); // State to hold the fetched menus
  const [activeMenuId, setActiveMenuId] = useState(null); // State for active menu id

  // Fetch menus from backend
  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/menu");
        if (response.ok) {
          const data = await response.json();
          setMenus(data); // Set fetched menus
          if (data.length > 0) {
            setActiveMenuId(data[0]._id); // Set default active menu id (first one)
          }
        } else {
          console.error("Failed to fetch menus");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchMenus();
  }, []); // Fetch menus on initial load

  // Handle button click to set active menu
  const handleButtonClick = (menuId) => {
    setActiveMenuId(menuId);
  };

  return (
    <div>
      {/* Button Section */}
      <div className="button-section">
        {menus.map((menu) => (
          <button
            key={menu._id} // Using _id for each button
            className={`menu-button ${
              activeMenuId === menu._id ? "active" : ""
            }`}
            onClick={() => handleButtonClick(menu._id)} // Set active menu id
          >
            {menu.name}
          </button>
        ))}
      </div>

      {/* Menu Details Section */}
      <MenuDetails activeMenuId={activeMenuId} />
    </div>
  );
};

export default ButtonSection;
