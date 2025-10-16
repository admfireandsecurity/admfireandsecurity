import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import ServiceFire from "./pages/ServiceFire";
import ServiceCCTV from "./pages/ServiceCCTV";
import ServiceIntruder from "./pages/ServiceIntruder";
import ServiceLighting from "./pages/ServiceLighting";
import ServiceSignage from "./pages/ServiceSignage";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service-fire" element={<ServiceFire />} />
        <Route path="/service-cctv" element={<ServiceCCTV />} />
        <Route path="/service-intruder" element={<ServiceIntruder />} />
        <Route path="/service-lighting" element={<ServiceLighting />} />
        <Route path="/service-signage" element={<ServiceSignage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
