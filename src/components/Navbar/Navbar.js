import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbarlinks from "./Navbar-link";

function Navbar() {
  return (
    <Router>
      <Navbarlinks />
    </Router>
  );
}

export default Navbar;
