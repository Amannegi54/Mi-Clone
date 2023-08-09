import React from "react";
import Data from "../Data/data.json";
import "../style/Product-Review.css";

const ProductReview = () => {
  const item = Data.productReviews;
  console.log(item);
  return (
    <div className="d-flex justify-content-center gap-4">
      {item.map((item, index) => (
        <div className="bg-white onHover OnHover-transform width">
          <img className="width" src={item.image} index={index} />
          <div className="ps-4">
            <div className="pt-4 fs-6 fw-1 font-weight gray" index={index}>
              {item.review}
            </div>
            <div className="d-flex py-2 font-size">
              <div className="gray" index={index}>
                {item.name}
              </div>
              <div className="ps-4 orange" index={index}>
                {item.price}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductReview;
