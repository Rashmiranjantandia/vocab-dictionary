import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <hr style={{ width: "90%", marginTop: 20 }} />
      <span className="name">
        Made by{" "}
        <a href="https://rashmiranjan-portfolio.web.app/" target="__blank">
          Rashmi Ranjan
        </a>
      </span>
      <div className="iconContainer">
        <a href="https://github.com/Rashmiranjantandia" target="__blank">
          <i className="fab fa-github-square fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/rashmi-ranjan-tandia/" target="__blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://rashmiranjan-portfolio.web.app/" target="__blank">
          <i className="fas fa-link fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
