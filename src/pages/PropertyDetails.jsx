import React from "react";
import { useParams } from "react-router-dom";
import rentalProperties from "../assets/rental-properties.json";
import Slideshow from "../components/Slideshow";
import Collapse from "../components/Collapse";
import "../stylesheets/PropertyDetails.scss";
import starInactive from "../assets/images/star-inactive 2.png";

const PropertyDetails = () => {
  const { id } = useParams();
  const property = rentalProperties.find((item) => item.id === id);

  if (!property) return <p>Property not found</p>;

  const rating = parseInt(property.rating); // 🔧 convert to number

  return (
    <div className="property-details">
      <Slideshow pictures={property.pictures} />

      <div className="property-info">
        <div className="left">
          <h1>{property.title}</h1>
          <p className="location">{property.location}</p>

          <div className="tags">
            {property.tags?.map((tag, index) => (
              <span className="tag" key={index}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="right">
          <div className="host">
            <p className="host-name">{property.host.name}</p>
            <img
              className="host-img"
              src={property.host.picture}
              alt={property.host.name}
            />
          </div>

          <div className="rating">
            {[1, 2, 3, 4, 5].map((num) => (
              <span
                key={num}
                className={num <= rating ? "star filled" : "star"}
              >
                <img src={starInactive} alt="star" />
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="collapse-section">
        <Collapse title="Description" content={property.description} />
        <Collapse
          title="Amenities"
          content={
            <ul>
              {property.equipments.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
};

export default PropertyDetails;
