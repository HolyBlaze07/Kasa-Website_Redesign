import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/Header.scss";

function Header() {
  return (
    <header>
      <nav>
        <img
          src="src/assets/images/LOGO.svg"
          alt="Kasa logo"
          className="kasa-logo"
        />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
