import React, { useRef, useState } from "react";
import Container from "../../components/contentContainer/ContentContainer.jsx";
import './ContactStyle.css';

function Contact() {
    const form = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setErrors({
            ...errors,
            [name]: ''
        });
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;
        const newErrors = {};

        if (!name) newErrors.name = "Please fill out this field.";
        if (!email) {
            newErrors.email = "Please fill out this field.";
        } else if (!validateEmail(email)) {
            newErrors.email = "Please enter a valid email address.";
        }
        if (!message) newErrors.message = "Please fill out this field.";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        const mailtoLink = `mailto:karthikr4787@gmail.com?subject=Message from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
        window.location.href = mailtoLink;
    };

    return (
        <Container variantType="upToDown">
            <div className="contact-form">
                <h2>Let's Get in Touch! 😁</h2>
                <form ref={form} onSubmit={handleSubmit} noValidate>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            className={`contact-input-style ${errors.name ? 'error' : ''}`}
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        {errors.name && <span className="error-message">{errors.name}</span>}
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            className={`contact-input-style ${errors.email ? 'error' : ''}`}
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>

                    <div className="form-group">
                        <label>Message</label>
                        <textarea
                            name="message"
                            className={`contact-input-style ${errors.message ? 'error' : ''}`}
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                        {errors.message && <span className="error-message">{errors.message}</span>}
                    </div>

                    <button type="submit">Send</button>
                </form>
            </div>
        </Container>
    );
}

export default Contact;
