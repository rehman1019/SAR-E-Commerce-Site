// src/components/EditProfile.jsx

import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import "../App.css";

const EditProfile = () => {
  const { user, updateUser } = useContext(AppContext);
  const [formData, setFormData] = useState(user);
  const [errors, setErrors] = useState({});

  // Handle input changes and update form data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Clear errors when the user starts typing
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};

    // Name validation: Only allows letters and spaces
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = "Name should only contain letters and spaces.";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }

    // Phone number validation: Must be 10 digits
    if (!formData.phoneNo.trim()) {
      newErrors.phoneNo = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phoneNo)) {
      newErrors.phoneNo = "Phone number must be exactly 10 digits.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      updateUser(formData);
      alert("Profile updated successfully!");

      // Clear form data after successful submission
      setFormData({
        name: '',
        email: '',
        phoneNo: '',
      });
    }
  };

  return (
    <div className="edit-profile">
      <div className="edit-profile-info">
        <h1>Edit Profile</h1>
        <form className="edit-profile-form" onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </label>
          <label>
            PhoneNo:
            <input
              type="tel"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
              placeholder="Enter your number"
            />
            {errors.phoneNo && <span className="error">{errors.phoneNo}</span>}
          </label>
          <div className="edit-buttons">
            <button className="save-button" type="submit">
              Save
            </button>
            <Link to="/account">
              <button className="back-btn">Back to Account</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
