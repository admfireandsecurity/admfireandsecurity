import React from "react";
import { Link } from "react-router-dom";

const ServiceCCTV: React.FC = () => {
  return (
    <section className="service-detail">
      <h1>CCTV & Monitoring</h1>
      <p>
        Our CCTV systems provide high-definition surveillance and secure remote access.
        We supply and install IP cameras, DVR systems, and cloud recording solutions.
      </p>
      <ul>
        <li>HD and 4K camera options</li>
        <li>Remote viewing via smartphone app</li>
        <li>Professional monitoring available</li>
      </ul>
      <Link to="/contact" className="quote-btn">Get a Quote</Link>
    </section>
  );
};

export default ServiceCCTV;
