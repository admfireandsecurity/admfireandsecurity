import React from "react";
import { Link } from "react-router-dom";

const ServiceAccess: React.FC = () => {
  return (
    <section className="service-detail">
      <h1>Access Control Systems</h1>
      <p>
        ADM Fire & Security provides access control solutions to secure your building, restrict unauthorized access, and monitor entry points effectively.
      </p>

      <h2>Our Access Control Services Include:</h2>
      <ul>
        <li>Key card and fob systems</li>
        <li>Biometric access control</li>
        <li>Integration with alarms and CCTV</li>
        <li>System maintenance and troubleshooting</li>
      </ul>

      <p>
        We create smart access solutions that enhance security without compromising convenience.
      </p>

      <Link to="/contact" className="quote-btn">
        Get a Quote
      </Link>
    </section>
  );
};

export default ServiceAccess;
