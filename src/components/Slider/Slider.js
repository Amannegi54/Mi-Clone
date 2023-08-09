import React from "react";
import Banner from "../../Data/data.json";
import Carousel from "react-bootstrap/Carousel";
function Slider() {
  const BannerImg = Banner.banner.start;
  // console.log(BannerImg);
  return (
    <>
      <Carousel>
        {BannerImg.map((item, index) => (
          <Carousel.Item>
            <img className="d-block w-100" src={item} alt="first-slider" />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}

export default Slider;
