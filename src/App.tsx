import React from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";

const App: React.FC = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Contact />
    </div>
  );
};

export default App;
