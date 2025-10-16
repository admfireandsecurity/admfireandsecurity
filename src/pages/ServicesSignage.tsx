import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const ServiceSignage: React.FC = () => {
  return (
    <div className="service-page">
      <div className="service-hero">
        <h1>Fire Safety Signage Installation</h1>
        <p>
          Clear and compliant signage is critical for effective emergency
          response. We provide high-quality safety signage for every
          environment.
        </p>
      </div>

      <div className="service-content">
        <h2>Comprehensive Signage Solutions</h2>
        <p>
          From fire exit and assembly point signs to hazard warnings and
          directional indicators, we supply and install signage that meets all
          UK fire safety and health standards.
        </p>

        <h3>Our Range Includes:</h3>
        <ul>
          <li>Fire exit and emergency route signs</li>
          <li>Fire extinguisher and equipment labels</li>
          <li>Warning and prohibition signs</li>
          <li>Photoluminescent (glow-in-the-dark) signage</li>
          <li>Custom-designed signs for unique spaces</li>
        </ul>

        <p>
          All signage materials are durable, long-lasting, and compliant with
          BS EN ISO 7010 standards for workplace safety.
        </p>

        <Link to="/contact" className="quote-button">
          Request a Free Quote
        </Link>
      </div>
    </div>
  );
};

export default ServiceSignage;
