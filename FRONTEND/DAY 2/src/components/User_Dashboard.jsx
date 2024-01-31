// UserDashboardDetails.js
import React from 'react';

function UserDashboardDetails() {
  // Fetch user details or use props to display relevant information
  const userDetails = {
    username: 'John Doe',
    email: 'john.doe@example.com',
    // Add more details as needed
  };

  return (
    <div className="user-dashboard-details">
      <div className="profile-info">
        <img
          src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=600" 
          alt="Profile"
          className="profile-image"
        />
        <h2>{userDetails.username}</h2>
        <p><strong>Email:</strong> {userDetails.email}</p>
        {/* Add more details as needed */}
      </div>
    </div>
  );
}

export default UserDashboardDetails;
