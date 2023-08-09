import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../../style/HotAccess.css";
const LayoutHotAccessories = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/Music-store">Music Store</Link>
          </li>
          <li>
            <Link to="/Smart-device">Smart Devices</Link>
          </li>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/lifeStyle">Lifestyle</Link>
          </li>
          <li>
            <Link to="/Mobile-Accessories">Mobile Accessories</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default LayoutHotAccessories;
