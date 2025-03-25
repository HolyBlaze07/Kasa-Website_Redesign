import React, { useState } from "react";
import "../stylesheets/Collapse.scss";
import { FaChevronDown } from "react-icons/fa";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => setIsOpen(!isOpen);

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={toggleCollapse}>
        <h3>{title}</h3>
        <FaChevronDown className={`collapse-icon ${isOpen ? "open" : ""}`} />
      </div>
      {isOpen && <div className="collapse-content">{content}</div>}
    </div>
  );
};

export default Collapse;
