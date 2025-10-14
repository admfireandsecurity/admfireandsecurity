import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ServiceFire from "./pages/ServiceFire";
import ServiceCCTV from "./pages/ServiceCCTV";
import ServiceIntruder from "./pages/ServiceIntruder";
import ServiceLighting from "./pages/ServiceLighting";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/fire-alarms" element={<ServiceFire />} />
        <Route path="/services/cctv" element={<ServiceCCTV />} />
        <Route path="/services/intruder-alarms" element={<ServiceIntruder />} />
        <Route path="/services/emergency-lighting" element={<ServiceLighting />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
