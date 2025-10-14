import React from "react";
import { Link } from "react-router-dom";

const ServiceFire: React.FC = () => {
  return (
    <section className="service-detail">
      <h1>Fire Alarm Systems</h1>
      <p>
        Our fire alarm systems are designed and installed to meet British Standards (BS5839). 
        We offer everything from small domestic systems to full-scale commercial installations.
      </p>
      <ul>
        <li>Addressable and conventional systems</li>
        <li>24/7 monitoring and maintenance</li>
        <li>Integration with access control and emergency lighting</li>
        <li>Annual testing and certification</li>
      </ul>
      <Link to="/contact" className="quote-btn">Get a Quote</Link>
    </section>
  );
};

export default ServiceFire;
