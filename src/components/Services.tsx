import React from "react";

const Services: React.FC = () => {
  const services = [
    {
      title: "Fire Alarm Systems",
      desc: "Professional installation, testing, and maintenance of fire alarm systems."
    },
    {
      title: "Security Systems",
      desc: "Comprehensive security and intruder alarm installations for homes and businesses."
    },
    {
      title: "CCTV Monitoring",
      desc: "High-definition camera systems for 24/7 surveillance and protection."
    },
    {
      title: "Emergency Support",
      desc: "Rapid response and technical support available 24 hours a day."
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
