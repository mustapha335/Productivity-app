import React from "react";
import "./Date.css";

const d = new Date();

const month = d.getMonth() + 1; // Month	[mm]	(1 - 12)
const day = d.getDate(); // Day		[dd]	(1 - 31)
const year = d.getFullYear();
const date = () => {
  return (
    <div>
      <div className="date_i" style={{ fontSize: 90 }}>
        <h1>
          {day}-{month}-{year}
        </h1>
      </div>
    </div>
  );
};

export default date;
