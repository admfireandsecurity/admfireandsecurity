import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <h1>ADM Fire and Security Specialists</h1>
        <p>Professional security solutions for homes and businesses.</p>
        <Link to="/contact" className="quote
