import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">ADM Fire & Security</div>
      <ul className="nav-links">
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
