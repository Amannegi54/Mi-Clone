import React from "react";
import FooterSupport from "./FooterSupport";
import FooterShopandLearn from "./FooterShopandLearn";
import FooterRetailStore from "./FooterRetailStore";
import FooterAbout from "./FooterAbout";
import FooterContact from "./FooterContact";
import "../../style/Footer.css";
import FooterChat from "./FooterChat";
import FooterCopy from "./FooterCopy";
const Footer = () => {
  return (
    <>
      <div className="d-flex bg-dark footer-container py-5 mt-2">
        <FooterSupport />
        <FooterShopandLearn />
        <FooterRetailStore />
        <FooterAbout />
        <FooterContact />
        <FooterChat />
      </div>
      <div className="bg-dark d-flex justify-content-center">
        <div className="hr"></div>
      </div>
      <div>
        <FooterCopy />
      </div>
    </>
  );
};

export default Footer;
