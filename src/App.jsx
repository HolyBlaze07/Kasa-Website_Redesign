import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import RentalProperties from "./pages/PropertyDetails.jsx";
import Header from "./components/Header";
import Error from "./components/Error/Error.jsx";
import Footer from "./components/Footer";
import "./stylesheets/HomePage.scss";
import PropertyDetails from "./pages/PropertyDetails";
import "./stylesheets/App.scss"; 

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rental-properties" element={<RentalProperties />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
