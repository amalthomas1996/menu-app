import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddMenu.css"; // Import the CSS file

const AddMenu = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newMenu = { name, description };

    try {
      const response = await fetch("http://localhost:5000/api/menu/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMenu),
      });

      if (response.ok) {
        alert("Menu created successfully!");
        navigate("/admin");
      } else {
        alert("Failed to create menu");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while creating the menu");
    }
  };

  return (
    <div className="add-menu-container">
      <form onSubmit={handleSubmit} className="add-menu-form">
        <h2 className="add-menu-title">Add New Menu</h2>
        <div className="form-group">
          <label className="form-label">Menu Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="form-textarea"
          ></textarea>
        </div>
        <button type="submit" className="submit-button">
          Create Menu
        </button>
      </form>
    </div>
  );
};

export default AddMenu;
