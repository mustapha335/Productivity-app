import React from "react";
import "./NavBar.css";

const navBar = () => {
  return (
    <div className="navbar__container">
      <div class="icons8-menu">
        <div className="navbar__text">
          <span className="text1">NOTES</span>
          <span className="text2">PROJECTS</span>
        </div>
      </div>
    </div>
  );
};

export default navBar;
