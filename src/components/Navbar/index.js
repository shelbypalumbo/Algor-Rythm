import React from "react";
import "./style.css";

const Navbar = () => {
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  return (
    <div className="topnav" id="myTopnav">
      <a href="/Algor-Rythm" className="active">
        Home
      </a>
      <a href="/AboutMe">About Me</a>
      <a href="/Publications">Publications</a>
      <a href="/Contact">Contact</a>
      <a href="#/" className="icon" onClick={myFunction}>
        <i className="fa fa-bars"></i>
      </a>
    </div>
  );
};
export default Navbar;
