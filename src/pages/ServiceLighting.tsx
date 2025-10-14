import React from "react";
import { Link } from "react-router-dom";

const ServiceLighting: React.FC = () => {
  return (
    <section className="service-detail">
      <h1>Emergency Lighting</h1>
      <p>
        We design and install emergency lighting systems that meet BS5266 standards,
        ensuring your premises remain safe and compliant during power outages.
      </p>
      <ul>
        <li>LED emergency lighting systems</li>
        <li>Routine testing and certification</li>
        <li>Maintenance and compliance audits</li>
      </ul>
      <Link to="/contact" className="quote-btn">Get a Quote</Link>
    </section>
  );
};

export default ServiceLighting;
