import React from "react";
import "../../style/prefooter.css";

const PrefooterItems = (props) => {
  return (
    <div className="d-flex gap-3 align-items-center prefoot-1">
      {props.Icon}
      <div>
        <b className="fs-6">{props.heading}</b>
        <p className="fs-6">{props.contant}</p>
      </div>
    </div>
  );
};

export default PrefooterItems;
