import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ServiceFire from "./pages/ServiceFire";
import ServiceCCTV from "./pages/ServiceCCTV";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service-fire" element={<ServiceFire />} />
        <Route path="/service-cctv" element={<ServiceCCTV />} />
      </Routes>
    </Router>
  );
}

export default App;
