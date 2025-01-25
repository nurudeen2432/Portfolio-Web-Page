import React, { useState, useCallback } from "react"; // Added useState import
import "./Contact.css";
import them_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  //check if form was filled

  const validateForm = useCallback(() => {
    const newErrors = {};
    const trimValue = (field) => formData[field]?.trim();

    if (!trimValue("name")) {
      newErrors.name = "Name is required";
    }

    if (!trimValue("email")) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!trimValue("message")) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);


  const onSubmit = useCallback(
    async (event) => {
      event.preventDefault();

      const object = {
        access_key: import.meta.env.VITE_WEB3FORMS_KEY,
        ...formData,
      };

      if (validateForm()) {
      

      const json = JSON.stringify(object);

        try {
          const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: json,
          });

          const data = await res.json();

          if (data.success) {
            alert(data.message);

            setFormData({
              name: "",
              email: "",
              message: "",
            });
          }
        } catch (error) {
          console.error("Error submitting form:", error);
          alert("An error occurred while submitting the form");
        }
      }
    },
    [formData]
  );

  

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));

      if (errors[name]) {
        setErrors((prev) => ({
          ...prev,
          [name]: "",
        }));
      }
    },
    [errors]
  );

  

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={them_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want to work on. You can
            contact me anytime
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" /> <p>nurudeendurowade@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" /> <p>+2348102308366</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" /> <p> LA, Nigeria</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`${errors.name ? "border-red-500" : ""}`}
          />
          {errors.name && (
            <span
              style={{
                color: "red",
                display: "block",
                marginTop: "4px",
                marginBottom: "8px",
              }}
            >
              {errors.name}
            </span>
          )}
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`${errors.email ? "border-red-500" : ""}`}
          />
          {errors.email && (
            <span
              style={{
                color: "red",
                display: "block",
                marginTop: "4px",
                marginBottom: "8px",
              }}
            >
              {errors.email}
            </span>
          )}
          <label htmlFor="message">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            className={`${errors.message ? "border-red-500" : ""}`}
          ></textarea>
          {errors.message && (
            <span
              style={{
                color: "red",
                display: "block",
                marginTop: "4px",
                marginBottom: "8px",
              }}
            >
              {errors.message}
            </span>
          )}
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
