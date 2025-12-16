import React from "react";
import "./Contact.css";
import { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "e6c4db96-1334-4928-a2e8-1c692393386d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
    if (data.success) {
    alert("Message sent successfully!");
    event.target.reset();
  } else {
    alert("Error sending message!");
  }
  };
  return (
    <div className="contact-section" id="contact">

      <h2 className="contact-title">Contact Me</h2>

      <div className="contact-container">

        {/* -------- LEFT SIDE -------- */}
        <div className="contact-left">
          <h3>Let’s Connect</h3>
          <p>Open to internships, freelance work, and collaborations.</p>

          <div className="contact-details">
            <p><strong>Email:</strong> <br/>
             mani42you@gmail.com</p>
            <p><strong>Location:</strong> <br/>
            Bengaluru India</p>
          </div>

          <div className="social-links">
            <a href="https://github.com/mani42u" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer">
              Twitter
            </a>
          </div>
        </div>

        {/* -------- RIGHT SIDE -------- */}
        <div className="contact-right">
          <h3>Send a Message</h3>

          <form onSubmit={onSubmit} className="contact-form">
            <input type="text" placeholder="Your Name" name="Name" required />
            <input type="email" placeholder="Your Email" name="Email" required />
            <textarea rows="5" placeholder="Your Message" name="Message" required></textarea>

            <button type="submit" className="send-btn">
              Send Message
            </button>
          </form>
        </div>

      </div>

    </div>
  );
};

export default Contact;
