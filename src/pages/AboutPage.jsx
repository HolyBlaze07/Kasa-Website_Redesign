import Collapse from "../components/Collapse";
import "../stylesheets/AboutPage.scss";

const aboutData = [
  {
    title: "Reliability",
    content:
      "The listings posted on Kasa guarantee total reliability. The photos match the accommodations, and all information is regularly verified by our team.",


  },
  {
    title: "Respect",
    content:
      "Kindness is one of Kasa’s founding values. Any discriminatory behavior or disruption to the neighborhood will result in removal from our platform.",


  },
  {
    title: "Service",
    content:
      "Our team is at your service to provide you with the best possible experience. Don’t hesitate to contact us if you have any questions.",


  },
  {
    title: "Security",
    content:
      "Security is Kasa’s top priority. For both our hosts and travelers, every accommodation meets the safety standards established by our team.",


  },
];

function About() {
  return (
    <div className="about-page">
      <div className="about-banner">
        <img
          src="src/assets/images/kalen-emsley-Bkci_8qcdvQ-unsplash 2 (1).png"
          alt="mountain banner"
          className="about-image"
        />
        <div className="about-overlay"></div>
      </div>

      {/* Wrapper for collapses */}
      <div className="about-collapse-wrapper">
        {aboutData.map((item, index) => (
          <Collapse key={index} title={item.title} content={item.content} />
        ))}
      </div>
    </div>
  );
}

export default About;
