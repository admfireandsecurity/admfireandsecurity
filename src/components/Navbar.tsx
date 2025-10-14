import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Optional: for styling

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">ADM Fire & Security</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li className="dropdown">
          <span>Services</span>
          <ul className="dropdown-content">
            <li><Link to="/service-fire">Fire Alarm Installation</Link></li>
            <li><Link to="/service-cctv">CCTV Installation</Link></li>
            <li><Link to="/service-access">Access Control</Link></li>
            <li><Link to="/service-intruder">Intruder Alarms</Link></li>
          </ul>
        </li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
