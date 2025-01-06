import { useState } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Addmenu from "./Components/AddMenu/Addmenu";
import Home from "./Components/Home/Home";

import AddMenuItem from "./Components/AddMenuItem/AddMenuItem";
import MenuDetails from "./Components/MenuDetails/MenuDetails";
import Admin from "./Components/Admin/Admin";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/addmenu" element={<Addmenu />} />
          <Route path="/additem/:menuId" element={<AddMenuItem />} />
          <Route path="/menu/:menuId" element={<MenuDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
