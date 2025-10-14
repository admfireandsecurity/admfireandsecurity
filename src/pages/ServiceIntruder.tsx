import React from "react";
import { Link } from "react-router-dom";

const ServiceIntruder: React.FC = () => {
  return (
    <section className="service-detail">
      <h1>Intruder Alarm Systems</h1>
      <p>
        Protect your property from unauthorized entry with our intruder alarm systems. ADM Fire & Security installs reliable alarms for homes and businesses.
      </p>

      <h2>Our Intruder Alarm Services Include:</h2>
      <ul>
        <li>Intruder alarm system design and consultation</li>
        <li>Installation of sensors and sirens</li>
        <li>Integration with CCTV and access control</li>
        <li>Regular testing, maintenance, and upgrades</li>
      </ul>

      <p>
        Our systems are tailored to your property and provide instant alerts in case of any security breach.
      </p>

      <Link to="/contact" className="quote-btn">
        Get a Quote
      </Link>
    </section>
  );
};

export default ServiceIntruder;
