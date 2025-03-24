import React from "react";
import Header from "../components/Header";
import "../stylesheets/AboutPage.scss";

function About() {
  return (
    <div className="about-banner">
      <img
        src="src/assets/images/kalen-emsley-Bkci_8qcdvQ-unsplash 2 (1).png"
        className="about-image"
        alt="mountain landscape"
      />
      <div className="about-overlay"></div>
    </div>
  );
}

export default About;
