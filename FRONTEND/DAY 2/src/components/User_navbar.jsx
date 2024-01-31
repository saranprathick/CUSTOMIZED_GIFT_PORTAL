
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserDashboardDetails from './User_Dashboard';
import '../assets/css/User_navbar.css';

function User_Nav() {
  const [showDashboardDetails, setShowDashboardDetails] = useState(false);

  const toggleDashboardDetails = () => {
    setShowDashboardDetails(!showDashboardDetails);
  };

  return (
    <div className="navbar">
      <div className="brand">
        <img
          id="logo"
          src="https://w7.pngwing.com/pngs/600/451/png-transparent-gift-box-illustration-gift-card-computer-icons-gift-shop-christmas-gift-box-miscellaneous-angle-text-thumbnail.png"
          alt="Logo"
        />
        <h1 className="title">GIFT PORTAL</h1>
      </div>
      <ul className="nav-link">
        <li>
          <Link to="/userhome" className="nav-item">
            Home
          </Link>
        </li>
        <li>
          <Link to="/category" className="nav-item">
            Categories
          </Link>
        </li>
        <li>
          <Link to="/myorder" className="nav-item">
            My Orders
          </Link>
        </li>
      </ul>
      <div className="profile-photo" onClick={toggleDashboardDetails}>
        <img
          src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=600" 
          alt="Profile"
          className="profile-image"
        />
      </div>
      {showDashboardDetails && <UserDashboardDetails />}
    </div>
  );
}

export default User_Nav;
