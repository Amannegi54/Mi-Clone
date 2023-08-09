import React from "react";
import Data from "../../Data/data.json";
import { BrowserRouter, Link } from "react-router-dom";

const FooterContact = () => {
  const Contact = Data.footer.contactUs;
  return (
    <div className="Footer-part">
      <div className="text-white Heading">Contact Us</div>
      <div className="Footer-Links">
        {Contact.map((item, index) => (
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

export default FooterContact;
