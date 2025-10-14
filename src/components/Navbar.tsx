import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">ADM Fire & Security</Link>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <div className="services-dropdown">
          <span>Services ▼</span>
          <div className="services-dropdown-content">
            <Link to="/service-fire">Fire Alarm Installation</Link>
            <Link to="/service-cctv">CCTV Installation</Link>
            <Li
