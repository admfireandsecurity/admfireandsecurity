import React from "react";

const services = [
  "Fire Alarm Installation & Maintenance",
  "Security Systems Installation",
  "CCTV Monitoring & Maintenance",
  "24/7 Emergency Support"
];

const Services: React.FC = () => {
  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <ul>
        {services.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
    </section>
  );
};

export default Services;
