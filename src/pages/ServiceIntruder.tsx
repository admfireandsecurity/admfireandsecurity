import React from "react";
import { Link } from "react-router-dom";

const ServiceIntruder: React.FC = () => {
  return (
    <section className="service-detail">
      <h1>Intruder Alarm Systems</h1>
      <p>
        Secure your premises with our range of wired and wireless intruder alarms.
        We tailor each system to meet the exact security needs of your home or business.
      </p>
      <ul>
        <li>Smart alarm integration with mobile alerts</li>
        <li>Police response options available</li>
        <li>NSI Gold-approved installations</li>
      </ul>
      <Link to="/contact" className="quote-btn">Get a Quote</Link>
    </section>
  );
};

export default ServiceIntruder;
