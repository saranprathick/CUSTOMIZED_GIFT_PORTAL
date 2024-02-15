import React, { useState } from 'react';
import '../assets/css/Userorder.css';
import axios from 'axios'; // Import Axios
import Admin_Nav from './Admin_navbar';

const UserOrderTable = () => {
  const [orderDetails, setOrderDetails] = useState([]); // State to store order details

  const getOrderDetails = () => {
    // Make GET request to fetch order details
    axios.get('http://localhost:8081/orders/all')
      .then(response => {
        console.log(response.data); // Log the fetched data to the console
        setOrderDetails(response.data); // Set the fetched data to state
      })
      .catch(error => {
        console.error('Error fetching order details:', error);
      });
  };

  return (
    <>
    <Admin_Nav/>
    <div className="table-container">
      <h1 className="table-title">USER ORDER DETAILS</h1>
      {/* Attach getOrderDetails function to onClick event of the button */}
      <button className="get-order-button" onClick={getOrderDetails}>Get Order Form</button>
      <table className="user-order-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Username</th>
            <th>Email</th>
            <th>Address</th>
            <th>PhoneNumber</th>
            <th>Gift_Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through the orderDetails state and render table rows dynamically */}
          {orderDetails.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.username}</td>
              <td>{order.email}</td>
              <td>{order.address}</td>
              <td>{order.phoneNumber}</td>
              <td>{order.giftName}</td>
              <td>{order.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default UserOrderTable;
