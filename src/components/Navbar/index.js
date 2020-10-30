import React from "react";
import "./style.css";

const Navbar = () => {
  function mobileDropDown() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  return (
    <div className="topnav" id="myTopnav">
      <a href="#" className="active">
        Contact
      </a>
      <a href="/AlgoLibrary">Algorithm Library</a>
      <a href="#/" className="icon" onClick={mobileDropDown}>
        <i className="fa fa-bars"></i>
      </a>
      <a href="/Algor-Rythm">Home</a>
    </div>
  );
};
export default Navbar;