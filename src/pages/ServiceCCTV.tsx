import React from "react";
import { Link } from "react-router-dom";

const ServiceCCTV: React.FC = () => {
  return (
    <section className="service-detail">
      <h1>CCTV Installation</h1>
      <p>
        Secure your property with our professional CCTV installation services. ADM Fire & Security installs high-quality camera systems for homes and businesses.
      </p>

      <h2>Our CCTV Services Include:</h2>
      <ul>
        <li>Full CCTV system design and consultation</li>
        <li>Installation of indoor and outdoor cameras</li>
        <li>Remote monitoring setup</li>
        <li>Maintenance, repair, and upgrades</li>
      </ul>

      <p>
        We ensure your surveillance system is reliable, efficient, and easy to use.
      </p>

      <Link to="/contact" className="quote-btn">
        Get a Quote
      </Link>
    </section>
  );
};

export default ServiceCCTV;
