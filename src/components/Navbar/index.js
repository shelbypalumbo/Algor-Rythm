import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  function mobileDropDown() {
    var x = document.getElementById("topNav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  return (
    <div className="topnav" id="topNav">
      <Link to="/Contact" className="active">
        Contact
      </Link>
      <Link to="/AlgoLibrary">Algorithm Library</Link>
      <a href="#/" className="icon" onClick={mobileDropDown}>
        <i className="fa fa-bars"></i>
      </a>
      <Link to="/Algor-Rythm">Home</Link>
    </div>
  );
};
export default Navbar;
