import React from "react";

const Services: React.FC = () => {
  const services = [
    {
      title: "Fire Alarm Systems",
      desc: "Certified installation and testing of advanced fire detection systems."
    },
    {
      title: "Intruder Alarms",
      desc: "Customised alarm systems to protect homes and commercial properties."
    },
    {
      title: "CCTV & Monitoring",
      desc: "High-resolution cameras with remote access and professional monitoring."
    },
    {
      title: "Emergency Lighting",
      desc: "Ensuring safety compliance with emergency illumination solutions."
    }
  ];

  return (
    <section className="services" id="services">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((s, index) => (
          <div className="service-card" key={index}>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
