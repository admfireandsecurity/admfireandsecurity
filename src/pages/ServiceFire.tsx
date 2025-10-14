import React from "react";
import { Link } from "react-router-dom";

const ServiceFire: React.FC = () => {
  return (
    <section className="service-detail">
      <h1>Fire Alarm Installation</h1>
      <p>
        At ADM Fire & Security, we provide professional fire alarm installations
        for residential, commercial, and industrial properties. Our systems ensure your safety and compliance with all regulations.
      </p>

      <h2>Our Fire Alarm Services Include:</h2>
      <ul>
        <li>Full system design and consultation</li>
        <li>Installation of smoke and heat detectors</li>
        <li>Integration with emergency lighting and alarms</li>
        <li>Regular maintenance and testing</li>
      </ul>

      <p>
        Our certified technicians ensure each installation meets the highest standards, giving you peace of mind.
      </p>

      <Link to="/contact" className="quote-btn">
        Get a Quote
      </Link>
    </section>
  );
};

export default ServiceFire;
