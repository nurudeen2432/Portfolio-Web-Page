import React, { useState } from 'react'  // Added useState import
import './Contact.css'
import them_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        
        const object = {
            access_key: import.meta.env.VITE_WEB3FORMS_KEY,
            ...formData
        };
        const json = JSON.stringify(object);
    
        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            });
            
            const data = await res.json();
            
            if (data.success) {
                alert(data.message);
                
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("An error occurred while submitting the form");
        }
    };

    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={them_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want to work on. You can contact me anytime</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /> <p>nurudeendurowade@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" /> <p>+2349164322370</p>
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
                        placeholder='Enter your name' 
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <label htmlFor="email">Your Email</label>
                    <input 
                        type="email" 
                        placeholder='Enter your email' 
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <label htmlFor="message">Write your message here</label>
                    <textarea 
                        name="message" 
                        rows="8" 
                        placeholder='Enter your message'
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                    <button type='submit' className="contact-submit">
                        Submit now
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact