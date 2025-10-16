import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const ServiceLighting: React.FC = () => {
  return (
    <div className="service-page">
      <div className="service-hero">
        <h1>Emergency Lighting Installation</h1>
        <p>
          Ensure safety during power failures with professional emergency
          lighting solutions designed for homes, offices, and commercial
          properties.
        </p>
      </div>

      <div className="service-content">
        <h2>Why Choose Our Emergency Lighting?</h2>
        <p>
          We specialize in the design, installation, and maintenance of
          emergency lighting systems that comply with safety standards and
          building regulations. Our team ensures your lighting system guides
          occupants safely during emergencies.
        </p>

        <h3>Our Services Include:</h3>
        <ul>
          <li>Design and layout planning for emergency lighting systems</li>
          <li>Installation of energy-efficient emergency lighting units</li>
          <li>Routine inspections and maintenance checks</li>
          <li>Replacement and testing of backup batteries</li>
          <li>Compliance with BS 5266 and fire safety standards</li>
        </ul>

        <p>
          We use trusted, high-quality components to ensure durability and
          reliability. Our systems are ideal for schools, offices, warehouses,
          and apartment blocks.
        </p>

        <Link to="/contact" className="quote-button">
          Request a Free Quote
        </Link>
      </div>
    </div>
  );
};

export default ServiceLighting;
