import React, { useState } from "react";
import "../styles/Contact.css";
import contact from "../assets/contactUs.jpg";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <div className="contact-container">

        {/* الرسالة تظهر فوق الفورم بعد الضغط */}
        {submitted && (
          <div className="success">
            <p>✅ Your message has been sent successfully!</p>
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Subject:</strong> {formData.subject}</p>
            <p><strong>Message:</strong> {formData.message}</p>
          </div>
        )}

        {/* الفورم */}
        <form onSubmit={handleSubmit} className="contact-form">
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
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>

        {/* معلومات الاتصال */}
        <div className="contact-information">
          <img src={contact} alt="Contact" className="contact-image" />
          <h3>Get In Touch</h3>
          <p><strong>📍 Address:</strong> HealthTrack, Beirut, Lebanon</p>
          <p><strong>📧 Email:</strong> support@healthtrack.com</p>
          <p><strong>☎️ Phone:</strong> +961 71 123 456</p>
          <p><strong>🕒 Hours:</strong> Mon–Fri, 9 AM – 6 PM</p>
        </div>

      </div>
    </div>
  );
}

export default Contact;

