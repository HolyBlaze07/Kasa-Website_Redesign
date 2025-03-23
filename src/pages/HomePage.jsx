import rentalProperties from "../assets/rental-properties.json";
import "../stylesheets/HomePage.scss";
import Card from "src/components/Card";

function Home() {
  console.log(rentalProperties);
  return (
    
    <div>
      <h1>At home, everywhere, and anywhere </h1>
      <img src="src/assets/images/background-image.png" alt="a landscape of mountains and body of water" className="background-image" />
      <div className="card-container">
        {rentalProperties.map((property) => (
          <Card
            key={property.id}
            title={property.title}
            cover={property.cover}
            location={property.location}
          />
        ))}
      </div>
    </div>

  );
}

export default Home;
