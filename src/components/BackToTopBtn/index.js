import React from "react";
import ScrollTop from "react-scrolltop-button";
import "./style.css";

const BacktoTopBtn = () => {
  return (
    <ScrollTop
      distance={100}
      breakpoint={750}
      className="scroll-your-role"
      speed={500}
      target={0}
    />
  );
};

export default BacktoTopBtn;
