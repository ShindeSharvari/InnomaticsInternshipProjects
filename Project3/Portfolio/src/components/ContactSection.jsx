import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "bootstrap-icons/font/bootstrap-icons.css";


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs
      .send(
        "service_cjnid4e", // Replace with your EmailJS service ID
        "template_ugsvww2", // Replace with your EmailJS template ID
        templateParams,
        "XQtruPPIwvF_cpAzh" // Replace with your EmailJS public key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Failed to send the message, please try again later.");
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <h2 className="contactTitle">Contact Me</h2>
      <div className="container contactUs">
        <div className="contact-box">
          <div className="left contactLeft">
            <img src="/Images/ContactPic.jpeg" className="contact-img" alt="Contact" />
            <div className="contact-info">
              <p>
                <i className="bi bi-person-fill"></i>  Sharvari Sunil Shinde 
              </p>
              <p>
                <a href="tel:+917020505673" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-telephone-fill"></i> +91-7020505673
                </a>
              </p>
              <p>
                <a href="mailto:shindesharvari003@gmail.com" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-envelope-fill"></i>    shindesharvari003@gmail.com
                </a>
              </p>
              <p>
                <a href="https://www.google.com/maps?q=Pune,India" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-geo-alt-fill"></i> Pune, India
                </a>
              </p>
            </div>

            <p className="contact-content">If you have any queries at all, please feel free to reach out and I'll gladly answer them.</p>
            <p className="contact-content">Thanks for visiting.</p>
          </div>
          <div className="right contactRight">
            <h2 className="contacth2">Let's Connect</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Enter your Full Name"
                className="field contactField"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                className="field contactField"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Enter your Subject"
                className="field contactField"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Suggestions/Queries"
                className="field contactField contactTextarea"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button className="btn contactBtn" type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
