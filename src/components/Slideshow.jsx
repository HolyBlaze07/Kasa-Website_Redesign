import React, { useState } from "react";
import "../stylesheets/Slideshow.scss";

const Slideshow = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const total = pictures.length

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1))
  }

  return (
    <div className="slideshow-container">
      <img src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} />

      {total > 1 && (
        <>
          <button className="left-arrow" onClick={handlePrev}>‹</button>
          <button className="right-arrow" onClick={handleNext}>›</button>
          <div className="slide-count">{currentIndex + 1}/{total}</div>
        </>
      )}
    </div>
  )
}

export default Slideshow



