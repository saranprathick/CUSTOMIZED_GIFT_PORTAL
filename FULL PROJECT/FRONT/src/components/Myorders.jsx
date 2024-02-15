import React, { useState } from 'react';
import '../assets/css/Userorder.css';
import axios from 'axios'; // Import Axios
import User_Nav from './User_navbar';

const MyOrders = () => {
  const [orderDetails, setOrderDetails] = useState([]); // State to store order details

  const getOrderDetails = () => {
    // Make GET request to fetch order details
    axios.get('http://localhost:8081/orders/all')
      .then(response => {
        // Map over the response data to extract only required fields
        const modifiedData = response.data.map(order => ({
          id: order.id,
        //   username: order.username,
          giftName: order.giftName,
          price: order.price
        }));
        console.log(modifiedData); // Log the fetched data to the console
        setOrderDetails(modifiedData); // Set the fetched data to state
      })
      .catch(error => {
        console.error('Error fetching order details:', error);
      });
  };

  return (
    <>
    <User_Nav/>
    <div className="table-container">
      <h1 className="table-title">MY ORDERS</h1>
      {/* Attach getOrderDetails function to onClick event of the button */}
      <button className="get-order-button" onClick={getOrderDetails}>GET MY ORDERS</button>
      <table className="user-order-table">
        <thead>
          <tr>
            <th>Id</th>
            {/* <th>Username</th> */}
            <th>Gift Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through the orderDetails state and render table rows dynamically */}
          {orderDetails.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              {/* <td>{order.username}</td> */}
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

export default MyOrders;
