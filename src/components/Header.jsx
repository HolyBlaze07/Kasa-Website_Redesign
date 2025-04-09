import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/Header.scss";
import logo from "../assets/images/LOGO.svg";

function Header() {
  return (
    <header>
      <div className="container">
        <nav>
          <img src={logo} alt="Kasa logo" className="kasa-logo" />

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
