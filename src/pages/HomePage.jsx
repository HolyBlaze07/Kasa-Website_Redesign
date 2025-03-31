import rentalProperties from "../assets/rental-properties.json";
import { Link } from "react-router-dom";
import "../stylesheets/HomePage.scss";
// Removed unused Header import
import Card from "../components/Card/Cards.jsx";

function Home() {
  console.log(rentalProperties);
  return (
    <div className="home-page">
      <div className="banner">
        <img
          src="src/assets/images/background-image.png"
          alt="a landscape of mountains and body of water"
          className="background-image"
        />

        <div className="overlay">
          <h1>At home, everywhere, and anywhere </h1>
        </div>
      </div>
      <div className="card-container">
        {rentalProperties.map((property) => (
          <div className="card-wrapper" key={property.id}>
            <Link to={`/property/${property.id}`} className="card-link">
            <Card
              title={property.title}
              cover={property.cover}
              location={property.location}
            />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
