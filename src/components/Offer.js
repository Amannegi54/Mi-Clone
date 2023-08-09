import React from "react";
import Offers from "../Data/data.json";
import Card from "react-bootstrap/Card";
import "../style/Offer.css";
//console.log(Offers.offer);

const Offer = () => {
  const Offer = Offers.offer;
  return (
    <div className="container py-3">
      <div className="d-flex Card">
        {Offer.map((item, index) => (
          <Card.Link href={item.url}>
            <Card.Img
              key={item.image}
              index={index}
              className="Image"
              variant="top"
              src={item.image}
            />
          </Card.Link>
        ))}
      </div>
    </div>
  );
};

export default Offer;
