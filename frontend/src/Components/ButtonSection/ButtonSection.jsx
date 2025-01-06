import React, { useState } from "react";
import "./ButtonSection.css";
import MenuDetails from "../MenuDetails/MenuDetails";

const ButtonSection = () => {
  const [activeMenu, setActiveMenu] = useState("BRUNCH");

  const handleButtonClick = (menuType) => {
    setActiveMenu(menuType);
  };

  return (
    <div>
      {/* Button Section */}
      <div className="button-section">
        <button
          className={`menu-button ${activeMenu === "FOOD" ? "active" : ""}`}
          onClick={() => handleButtonClick("FOOD")}
        >
          FOOD
        </button>
        <button
          className={`menu-button ${activeMenu === "DRINKS" ? "active" : ""}`}
          onClick={() => handleButtonClick("DRINKS")}
        >
          DRINKS
        </button>
        <button
          className={`menu-button ${activeMenu === "BRUNCH" ? "active" : ""}`}
          onClick={() => handleButtonClick("BRUNCH")}
        >
          BRUNCH
        </button>
      </div>

      {/* Menu Details Section */}
      <MenuDetails activeMenu={activeMenu} />
    </div>
  );
};

export default ButtonSection;
