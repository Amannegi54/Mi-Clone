import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "../../style/prefooter.css";
import { Facebook, Twitter, YouTube, Instagram } from "../../Assets/Svg";

const Prefooter2 = () => {
  return (
    <div className="PreFooter-2">
      <div>
        <b className="text-uppercase bold-text">Let's stay in touch</b>
        <p className="text-p">
          Get updates on sales specials and <br /> more
        </p>
      </div>
      <div>
        <input type="text" placeholder="Enter Email address" />
        <KeyboardArrowRightIcon className="right-arrow" />
        <p className="text-p">
          Thanks. You're on our email list for special <br /> offers.
        </p>
      </div>
      <div>
        <b className="text-uppercase bold-text">Follow Mi</b>
        <p className="text-p">We want to hear from you!</p>
      </div>
      <div className="d-flex gap-4">
        <div className="Icons">{Facebook}</div>
        <div className="Icons">{YouTube}</div>
        <div className="Icons">{Instagram}</div>
        <div className="Icons">{Twitter}</div>
      </div>
    </div>
  );
};

export default Prefooter2;
