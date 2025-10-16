import React from "react";
import { Link } from "react-router-dom";
import "./Services.css"; // Optional if you want to separate styles later

const Services = () => {
  return (
    <div className="services-page">
      <h1>Our Services</h1>
      <p>
        ADM Fire & Security offers a full range of professional installation and
        maintenance services designed to keep your property safe, compliant, and
        protected.
      </p>

      <div className="services-grid">
        <div className="service-card">
          <h2>Fire Alarm Systems</h2>
          <p>
            We design, install, and maintain industry-leading fire detection
            systems to ensure fast response and full regulatory compliance.
          </p>
          <Link to="/quote" className="quote-link">Get a Quote</Link>
        </div>

        <div className="service-card">
          <h2>Intruder Alarms</h2>
          <p>
            Secure your home or business with smart alarm systems that notify
            you instantly of any unauthorized access or suspicious activity.
          </p>
          <Link to="/quote" className="quote-link">Get a Quote</Link>
        </div>

        <div className="service-card">
          <h2>CCTV Installation</h2>
          <p>
            High-definition CCTV systems with remote monitoring and recording
            capabilities to enhance your property’s security 24/7.
          </p>
          <Link to="/quote" className="quote-link">Get a Quote</Link>
        </div>

        <div className="service-card">
          <h2>Emergency Lighting</h2>
          <p>
            We provide full installation and testing of emergency lighting
            systems to ensure safety during power outages or fire evacuations.
          </p>
          <Link to="/quote" className="quote-link">Get a Quote</Link>
        </div>

        <div className="service-card">
          <h2>Signage</h2>
          <p>
            Clear, compliant fire and safety signage designed to guide building
            occupants to safety in all emergency situations.
          </p>
          <Link to="/quote" className="quote-link">Get a Quote</Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
