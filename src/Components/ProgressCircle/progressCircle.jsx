import React from "react";
import "./ProgressCircle.css";

const progressCircle = () => {
  return (
    <div>
      <div class="circular">
        <div class="inner"></div>
        <div class="number">100%</div>
        <div class="circle">
          <div class="bar left">
            <div class="progress"></div>
          </div>
          <div class="bar right">
            <div class="progress"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default progressCircle;
