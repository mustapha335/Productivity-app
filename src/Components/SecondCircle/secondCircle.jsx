import React from "react";
import "./SecondCircle.css";

const progressCircle = () => {
  return (
    <div>
      <div className="circula">
        <div className="inner"></div>
        <div className="number">100%</div>
        <div className="circle">
          <div className="bar left">
            <div className="progress"></div>
          </div>
          <div className="bar right">
            <div className="progress"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default progressCircle;
