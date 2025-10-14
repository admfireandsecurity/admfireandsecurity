import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ServiceFire from "./pages/ServiceFire";
import ServiceCCTV from "./pages/ServiceCCTV";
import ServiceAccess from "./pages/ServiceAccess";
import ServiceIntruder from "./pages/ServiceIntruder";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service-fire" element={<ServiceFire />} />
        <Route path="/service-cctv" element={<ServiceCCTV />} />
        <Route path="/service-access" element={<ServiceAccess />} />
        <Route path="/service-intruder" element={<ServiceIntruder />} />
      </Routes>
    </Router>
  );
};

export default App;
