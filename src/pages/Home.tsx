import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <section className="home">
      <div className="hero">
        <h1>ADM Fire & Security Specialists</h1>
        <p>Professional installation and maintenance of safety and security systems across the UK.</p>
        <Link to="/contact" className="quote-btn">Get a Free Quote</Link>
      </div>

      <div className="services-grid">
        <Link to="/services/fire-alarms" className="service-card">🔥 Fire Alarm Systems</Link>
        <Link to="/services/intruder-alarms" className="service-card">🔔 Intruder Alarms</Link>
        <Link to="/services/cctv" className="service-card">📹 CCTV & Monitoring</Link>
        <Link to="/services/emergency-lighting" className="service-card">💡 Emergency Lighting</Link>
      </div>
    </section>
  );
};

export default Home;
