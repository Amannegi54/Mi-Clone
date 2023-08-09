import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../Data/data.json";
import "../../style/Navbar.css";
import { SearchIcon } from "../../Assets/Svg";

function Navbarlinks() {
  const [logoUrl, setLogoUrl] = useState("");

  useEffect(() => {
    // Load the image URL from the JSON data once the component mounts.
    setLogoUrl(logo.logo);
  }, []);
  //console.log(logo);

  return (
    <div className="Nav">
      <div className="logo">
        <Link to="/">
          <img className="logoImg" src={logo.logo} alt="Logo" />
        </Link>
      </div>
      <Link className="nav-links" to="/Redmiphones">
        Redmi Phones
      </Link>
      <Link className="nav-links" to="/Tv">
        TV
      </Link>
      <Link className="nav-links" to="/Miphones">
        Mi Phones
      </Link>
      <Link className="nav-links" to="/Laptops">
        Laptops
      </Link>
      <Link className="nav-links" to="/Fitness&Lifestyle">
        Fitness & Lifestyle
      </Link>
      <Link className="nav-links" to="/Home">
        Home
      </Link>
      <Link className="nav-links" to="/Audio">
        Audio
      </Link>
      <Link className="nav-links" to="/Accessories">
        Accessories
      </Link>
      <div className="Search_bar">
        <input className="search" type="text" placeholder="Search Product" />
        <span>{SearchIcon}</span>
      </div>
    </div>
  );
}

export default Navbarlinks;
