
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserDashboardDetails from './User_Dashboard';
import '../assets/css/admin_navbar.css';

function Admin_Nav() {
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
          <Link to="/adminhome" className="nav-item">
            Home
          </Link>
        </li>
        <li>
          <Link to="/image" className="nav-item">
            Image
          </Link>
        </li>
        <li>
          <Link to="/addgift" className="nav-item">
            AddGift
          </Link>
        </li>
        <li>
          <Link to="/gifts" className="nav-item">
            Gifts
          </Link>
        </li>
        <li>
          <Link to="/userorder" className="nav-item">
            UserOrderDetails
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

export default Admin_Nav;
