// src/components/Account.jsx

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import "../App.css";

const Account = () => {
  const { user } = useContext(AppContext);

  return (
    <div className="account">
      <div className="account-info">
        <h1>Account Information</h1>
        <div className="profile-info">
          <table>
            <tr>
              <td>Name:</td> <td>{user.name}</td>
            </tr>
            <tr>
              <td>Email:</td> <td>{user.email}</td>
            </tr>
            <tr>
              <td>Phone:</td> <td> {user.phoneNo}</td>
            </tr>
          </table>
        </div>
        <Link to="/edit-profile">
          <button className="edit-button">Edit Profile</button>
        </Link>
      </div>
    </div>
  );
};

export default Account;
