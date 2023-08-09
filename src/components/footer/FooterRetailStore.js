import React from "react";
import Data from "../../Data/data.json";
import { BrowserRouter, Link } from "react-router-dom";
const FooterRetailStore = () => {
  const RetailStore = Data.footer.retailStore;
  return (
    <div className="Footer-part">
      <div className="text-white Heading">Retail Store</div>
      <div className="Footer-Links">
        {RetailStore.map((item, index) => (
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

export default FooterRetailStore;
