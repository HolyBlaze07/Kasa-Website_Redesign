import React from "react";
import { Link } from "react-router-dom";
import "../../stylesheets/Error.scss";

const Error = () => {
  return (
    <div className="error-container">
      <h1>404</h1>
      <p>Oops! The page you're looking for doesn’t exist.</p>
      <Link to="/" className="error-link">Return to Home Page</Link>
    </div>
  );
};

export default Error;
