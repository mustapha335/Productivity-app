import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const navBar = () => {
  return (
    <div className="navbar__container">
      <div class="icons8-menu">
        <div className="navbar__text">
          <Link to="/">
            <span className="text2">Home</span>
          </Link>
          <Link to="/notes">
            <span className="text1">NOTES</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default navBar;
