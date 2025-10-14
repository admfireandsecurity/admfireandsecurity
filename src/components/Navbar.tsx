import React from "react";
import { Link } from "react-router-dom"; // assuming you are using react-router-dom

const Navbar: React.FC = () => {
  return (
    <nav>
      <h1>ADM Fire & Security</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li className="services-dropdown">
          <span>Services</span>
          <ul className="dropdown-menu">
            <li><Link to="/service-fire">Fire Alarm Installation</Link></li>
            <li><Link to="/service-cctv">CCTV Installation</Link></li>
            <li><Link to="/service-access">Access Control</Link></li>
            <li><Link to="/service-intruder">Intruder Alarm</Link></li>
          </ul>
        </li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
