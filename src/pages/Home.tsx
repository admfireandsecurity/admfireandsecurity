import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <main>
      <section className="hero">
        <h1>ADM Fire and Security Specialists</h1>
        <p>Professional security solutions for homes and businesses.</p>
        <Link to="/contact" className="quote-btn">Get a Quote</Link>
      </section>

      <section className="services-grid">
        <Link to="/service-fire" className="service-card">
          <h3>Fire Alarm Installation</h3>
          <p>Protect your property with reliable fire alarms.</p>
        </Link>
        <Link to="/service-cctv" className="service-card">
          <h3>CCTV Installation</h3>
          <p>High-quality surveillance solutions.</p>
        </Link>
        <Link to="/service-access" className="service-card">
          <h3>Access Control</h3>
          <p>Secure your building with smart access systems.</p>
        </Link>
        <Link to="/service-intruder" className="service-card">
          <h3>Intruder Alarms</h3>
          <p>Protect your property from unauthorized entry.</p>
        </Link>
      </section>
    </main>
  );
};

export default Home;
