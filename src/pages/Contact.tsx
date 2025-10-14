import React, { useState } from "react";

const Contact: React.FC = () => {
  const [status, setStatus] = useState("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/myznbqwd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  return (
    <section className="contact-page">
      <h1>Get a Quote or Ask a Question</h1>
      <p
        style={{
          textAlign: "center",
          marginBottom: "30px",
          color: "#CCCCCC",
        }}
      >
        Fill out the form below, and our team will respond promptly.
      </p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Tell us about your requirements..."
          rows={6}
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Submit"}
        </button>

        {status === "success" && (
          <p style={{ color: "#FFC107", marginTop: "15px" }}>
            ✅ Thank you! Your message has been sent successfully.
          </p>
        )}
        {status === "error" && (
          <p style={{ color: "#D32F2F", marginTop: "15px" }}>
            ❌ Oops, something went wrong. Please try again later.
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
