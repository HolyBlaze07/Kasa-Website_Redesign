import React from "react";
import "../stylesheets/Footer.scss"
import footerLogo from "../assets/images/LOGO-white.png";

function Footer() {
  return (
    <footer>
      <img src={footerLogo} alt="Kasa logo" className="footer-logo" />
      <p>© 2020 Kasa. All rights reserved.</p>
    </footer>
  );
}


export default Footer;
