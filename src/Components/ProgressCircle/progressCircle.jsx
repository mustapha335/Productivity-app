import React from "react";
import "./ProgressCircle.css";

const progressCircle = () => {
  return (
    <div>
      <div className="circular">
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
