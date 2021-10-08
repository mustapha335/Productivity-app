import React from "react";
import "./Calender.css";

const calender = () => {
  return (
    <div>
      <div className="container">
        <div class="div-1">
          {" "}
          <div class="arrow-down"></div>{" "}
          <div className="text_cal">
            <span className="text1">JAN</span>
            <span className="text1">FEB</span>
            <span className="text2">MAR</span>
            <span className="text1">APR</span>
            <span className="text1">MAY</span>
            {/*<span className="text1">JUN</span>
          <span className="text1">JUL</span>
          <span className="text1">AUG</span>
          <span className="text1">SEP</span>
          <span className="text1">OCT</span>
          <span className="text1">NOV</span>
          <span className="text1">DEC</span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default calender;
