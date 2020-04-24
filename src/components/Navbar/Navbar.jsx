import React from "react";
import logo from "../../logo.svg";
import "./Navbar.scss";
function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="city" />
      <ul className="nav-links">
        <li>
          <a href="/" className="navlink">
            home
          </a>
        </li>
        <li>
          <a href="/about" className="navlink">
            about
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
