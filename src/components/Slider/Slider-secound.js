import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Data from "../../Data/data.json";
import "../../style/Slider.css";

const Slidersecound = () => {
  const Banner = Data.banner.end;
  return (
    <div>
      <Carousel>
        {Banner.map((item, index) => (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={item.image}
              alt="first-slider"
              index="index"
            />
            <Carousel.Caption>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>{item.source}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Slidersecound;
