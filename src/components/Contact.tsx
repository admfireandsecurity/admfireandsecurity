import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="contact-section">
      <h2>Contact Us</h2>
      <p>Email: info@admfiresecurity.com</p>
      <p>Phone: +1 234 567 890</p>
      <bolt-button appearance="primary" onclick={() => alert("Contact form coming soon!")}>
        Contact Now
      </bolt-button>
    </section>
  );
};

export default Contact;
