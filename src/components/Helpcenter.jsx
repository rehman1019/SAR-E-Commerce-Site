// src/pages/Contact.js
import React, { useState } from 'react';
import '../App.css'; // Optional: for custom styling

const Helpcenter = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Function to validate form inputs
  const validateForm = () => {
    let valid = true;
    const newErrors = { name: '', email: '', message: '' };

    // Name validation: must only contain alphabets
    const namePattern = /^[A-Za-z\s]+$/;
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
      valid = false;
    } else if (!namePattern.test(formData.name)) {
      newErrors.name = 'Name can only contain alphabets.';
      valid = false;
    }

    // Email validation pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
      valid = false;
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = 'Invalid email format.';
      valid = false;
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Reset errors when user starts typing
    setErrors({ ...errors, [name]: '' });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the form before submission
    if (validateForm()) {
      // Handle form submission logic (e.g., send data to an API)
      alert('Message submitted');

      // Reset form fields
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }
  };

  return (
    <div className="contact">
      <div className="contact-info">
        <h1>Contact Us</h1>
        <form className="form-info" onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </label>
          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Enter your message"
            />
            {errors.message && <p className="error">{errors.message}</p>}
          </label>
          <button className="send-btn" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Helpcenter;
