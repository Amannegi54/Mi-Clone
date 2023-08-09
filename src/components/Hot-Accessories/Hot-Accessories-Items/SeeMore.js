import React from "react";
import { RightArrow } from "../../../Assets/Svg";
const SeeMore = () => {
  return (
    <div className="HotAccessories-Items">
      <div>
        <div className="HotAccessories-Item-contant onHover">
          <div className="BrowseMore">
            browse
            <br /> More
          </div>
          <div className="arrow">{RightArrow}</div>
        </div>
      </div>
    </div>
  );
};

export default SeeMore;
