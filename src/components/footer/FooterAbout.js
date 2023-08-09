import React from "react";
import Data from "../../Data/data.json";
import { BrowserRouter, Link } from "react-router-dom";

const FooterAbout = () => {
  const About = Data.footer.aboutUS;
  return (
    <div className="Footer-part">
      <div className="text-white Heading">About</div>
      <div className="Footer-Links">
        {About.map((item, index) => (
          <BrowserRouter>
            <Link to={item.url} index={index}>
              <div index={index}>{item.name}</div>
            </Link>
          </BrowserRouter>
        ))}
      </div>
    </div>
  );
};

export default FooterAbout;
