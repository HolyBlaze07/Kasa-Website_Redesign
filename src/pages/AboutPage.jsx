import Collapse from "../components/Collapse";
import "../stylesheets/AboutPage.scss";


const aboutData = [
  {
    title: "Reliability",
    content:
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements...",
  },
  {
    title: "Respect",
    content:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire...",
  },
  {
    title: "Service",
    content:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire...",
  },
  {
    title: "Security",
    content:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs...",
  },
];

function About() {
  return (
    <div className="about-page">
      <div className="about-banner">
        <img src="src/assets/images/kalen-emsley-Bkci_8qcdvQ-unsplash 2 (1).png" alt="..." className="about-image" />
        <div className="about-overlay"></div>
      </div>

      {aboutData.map((item, index) => (
  <Collapse key={index} title={item.title} content={item.content} />
))}
    </div>
  );
}

export default About;
