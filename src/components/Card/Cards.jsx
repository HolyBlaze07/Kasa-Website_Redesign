import React from "react";
import PropTypes from "prop-types";
import "../../stylesheets/Card.scss"

const Card = ({ title, cover }) => {
  return (
    <div className="card">
      <img src={cover} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
      
      </div>
    </div>
  );
};

// PropTypes for type checking
Card.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default Card;

