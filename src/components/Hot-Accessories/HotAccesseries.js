import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutHotAccessories from "../Hot-Accessories/LayoutHotAccessories";
import Home from "./Hot-Accessories-Items/Home";
import LifeStyle from "./Hot-Accessories-Items/LifeStyle";
import MobileAccessories from "./Hot-Accessories-Items/MobileAccessories";
import MusicStore from "./Hot-Accessories-Items/MusicStore";
import SmartDevice from "./Hot-Accessories-Items/SmartDevice";
import "../../style/HotAccess.css";
const HotAccesseries = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutHotAccessories />}>
          <Route path="/Music-Store" element={<MusicStore />} />
          <Route path="/Smart-Device" element={<SmartDevice />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/LifeStyle" element={<LifeStyle />} />
          <Route path="/Mobile-Accessories" element={<MobileAccessories />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default HotAccesseries;
