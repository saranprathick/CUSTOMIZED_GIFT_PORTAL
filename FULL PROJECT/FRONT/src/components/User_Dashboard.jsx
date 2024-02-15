// UserDashboardDetails.js
import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function UserDashboardDetails({ username, email, dispatch }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/signuporIn');
  };

  return (
    <div className="user-dashboard-details">
      <div className="profile-info">
        <img
          src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=600" 
          alt="Profile"
          className="profile-image"
        />
        <h2>{username}</h2>
        <p><strong>Email:</strong> {email}</p>
        {/* Add more details as needed */}
      </div>
      <center>
      <button onClick={handleLogout}>Logout</button>
      </center>
    </div>
  );
}

const mapStateToProps = (state) => ({
  username: state.user.username,
  email: state.user.email,
});

export default connect(mapStateToProps)(UserDashboardDetails);
