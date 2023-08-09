import React from "react";
import "../style/Hr.css";
function Brack(props) {
  return (
    <div className="Brack-comp">
      <div className="hr"></div>
      <div className="hr-sub">{props.name}</div>
    </div>
  );
}

export default Brack;
