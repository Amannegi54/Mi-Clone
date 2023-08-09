import React from "react";
import HotAccesserie from "../../../Data/data.json";
import SeeMore from "./SeeMore";

const SmartDevice = () => {
  const HotAccess = HotAccesserie.hotAccessories.smartDevice;
  const HotAccessCover = HotAccesserie.hotAccessoriesCover;
  return (
    <div className="container HotAccessories-container">
      <div className="HotAccessories-cover">
        <img
          className="HotAccessories-cover-img"
          src={HotAccessCover.smartDevice}
          alt="Cover"
        />
      </div>
      <div className="HotAccessories-Items">
        {HotAccess.map((item, index) => (
          <div>
            <div className="HotAccessories-Item-contant onHover">
              <img
                className="HotAccessories-Items-img"
                src={item.image}
                index={index}
                key={item.image}
                alt="Cover"
              />
              <div className="name-price">{item.name}</div>
              <div className="name-price">{item.price}</div>
            </div>
          </div>
        ))}
        <SeeMore />
      </div>
    </div>
  );
};

export default SmartDevice;
