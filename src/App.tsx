import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ServiceFire from "./pages/ServiceFire";
import ServiceCCTV from "./pages/ServiceCCTV";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service-fire" element={<ServiceFire />} />
        <Route path="/service-cctv" element={<ServiceCCTV />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
