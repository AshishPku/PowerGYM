import React from "react";
import logo from "./logo.png";

const Header = ({ options, setquery }) => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="GYM Logo" />
        <h6>PowerGYM</h6>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#home">Book a Trial Session</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
