import React from "react";
import "./Timer.css";

const timer = () => {
  return (
    <div class="center">
      <div class="circle">
        <div class="text">20mins</div>
        <div class="wave"></div>
      </div>

      <div className="buttons">
        <button type="submit" className="pause_button">
          Pause
        </button>
        <button type="submit" className="play_button">
          Start
        </button>
        <button type="submit" className="reset_button">
          reset
        </button>
      </div>
    </div>
  );
};

export default timer;
