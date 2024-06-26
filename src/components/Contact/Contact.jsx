import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "34298128-914e-4484-9f1c-1ce50dfef31d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            a quaerat. Velit quae veritatis saepe vel quas expedita numqua.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} />
              <p>lingarajkumaravel@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} />
              <p>+19 888-3424-479</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} />
              <p>india,tamil nadu</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label>your name</label>
          <input type="text" placeholder="Enter you name" name="name" />
          <label>your Email</label>
          <input type="email" placeholder="Enter you email" name="email" />
          <label>Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your massage"
          ></textarea>
          <button type="submit" className="contact-submit">
            submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
