import React from "react";
import Data from "../../Data/data.json";
import { BrowserRouter, Link } from "react-router-dom";
const FooterShopandLearn = () => {
  const ShopandLearn = Data.footer.shopAndLearn;
  return (
    <div className="Footer-part">
      <div className="text-white Heading">Shop And learn</div>
      <div className="Footer-Links">
        {ShopandLearn.map((item, index) => (
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

export default FooterShopandLearn;
