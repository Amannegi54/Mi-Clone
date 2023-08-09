import React from "react";
import Data from "../../Data/data.json";
import { BrowserRouter, Link } from "react-router-dom";
const FooterSupport = () => {
  const Support = Data.footer.support;
  return (
    <div className="Footer-part">
      <div className="text-white Heading">Support</div>
      <div className="Footer-Links">
        {Support.map((item, index) => (
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

export default FooterSupport;
