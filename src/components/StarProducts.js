import React from "react";
import StartProducts from "../Data/data.json";
import "../style/StarProduct.css";
//console.log(StartProducts.starProduct[0].image);
const StarProducts = () => {
  return (
    <div className="container StarProducts py-5">
      <div className="StarProduct-left">
        <a href={StartProducts.starProduct[0].url}>
          <img src={StartProducts.starProduct[0].image} alt="product1" />
        </a>
      </div>
      <div className="StarProduct-right">
        <a href={StartProducts.starProduct[1].url}>
          <img src={StartProducts.starProduct[1].image} alt="product1" />
        </a>
        <a href={StartProducts.starProduct[2].url}>
          <img src={StartProducts.starProduct[2].image} alt="product1" />
        </a>
        <a href={StartProducts.starProduct[3].url}>
          <img src={StartProducts.starProduct[3].image} alt="product1" />
        </a>
      </div>
    </div>
  );
};

export default StarProducts;
