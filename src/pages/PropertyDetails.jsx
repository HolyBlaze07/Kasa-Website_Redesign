import React from "react";
import { useParams } from "react-router-dom";
import rentalProperties from "../assets/rental-properties.json";
import Slideshow from "../components/Slideshow";
import Collapse from "../components/Collapse";
import "../stylesheets/PropertyDetails.scss";


const PropertyDetails = () => {
  const { id } = useParams();
  const property = rentalProperties.find((item) => item.id === id);

  if (!property) return <p>Property not found</p>;

  const rating = parseInt(property.rating); // 🔧 convert to number

  return (
    <div className="container">
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
              <i
                key={num}
                className="fa-solid fa-star"
                style={{ color: num <= rating ? "#FF6060" : "#E3E3E3" }}
              ></i>
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
    </div>
  );
};

export default PropertyDetails;
