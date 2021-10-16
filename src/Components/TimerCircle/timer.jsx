import React, { useState, useEffect } from "react";
import "./Timer.css";

const Timer = () => {
  const [timer, setTimer] = useState(25);
  const [isActive, setIsActive] = useState(false);
  const activeTimer = timer;
  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setTimer(25);
    setIsActive(false);
  }
  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTimer((timer) => timer - 1);
      }, 600);
    } else if (!isActive && timer === 0) {
      clearInterval(interval);
      setTimer(0);
    }
    return () => clearInterval(interval);
  }, [isActive, timer]);
  // const handleClick = () => {
  //   setTimeout(() => setTimer(timer - 1), 60000);
  // };
  // let interval = useRef();
  // const handleTimer = () => {
  //   interval = setInterval(() => {
  //     const countdown = timer - 1;
  //     if (countdown < 0) {
  //       //stp timer
  //       clearInterval();
  //     } else {
  //       setTimer(countdown);
  //     }
  //   }, 1000);
  // };
  // const handleClick = () => {
  //   if (timer < 0) {
  //     setTimer("5");
  //   } else {
  //     setTimer(() => setTimer(timer - 1), 1000);
  //   }
  // };

  return (
    <div className="center">
      <div className="circle">
        <div className="text">{activeTimer === 0 ? "0" : timer}mins </div>
        <div className="wave"></div>
      </div>

      <div className="row ">
        <button
          className={`button1 button-primary button-primary-${
            isActive ? "active" : "inactive"
          }`}
          onClick={toggle}
        >
          {isActive ? "Pause" : "Start"}
        </button>
        <button className="button button2" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
