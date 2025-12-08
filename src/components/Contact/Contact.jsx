import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-section" id="contact">

      <h2 className="contact-title">Contact Me</h2>

      <div className="contact-container">

        {/* -------- LEFT SIDE -------- */}
        <div className="contact-left">
          <h3>Let’s Connect</h3>
          <p>If you want to collaborate or have any opportunity, feel free to reach out!</p>

          <div className="contact-details">
            <p><strong>Email:</strong> manibhushan2003@gmail.com</p>
            <p><strong>Location:</strong> India</p>
          </div>

          <div className="social-links">
            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
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

          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea rows="5" placeholder="Your Message" required></textarea>

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
