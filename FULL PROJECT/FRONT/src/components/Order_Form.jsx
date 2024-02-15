import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import '../assets/css/OrderForm.css';
import User_Nav from './User_navbar';

const OrderForm = ({ history }) => { // Pass history as a prop
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    address: '',
    phoneNumber: '',
    giftName: queryParams.get('name') || '',
    price: queryParams.get('price') || '',
  });

  const [allFieldsFilled, setAllFieldsFilled] = useState(false);

  useEffect(() => {
    // Check if all required fields are filled out
    const { username, email, address, phoneNumber } = formData;
    if (username && email && address && phoneNumber) {
      setAllFieldsFilled(true);
    } else {
      setAllFieldsFilled(false);
    }
  }, [formData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!allFieldsFilled) {
      console.error('Please fill out all required fields.');
      alert('Please fill out all required fields.');
      return;
    }

    console.log('Form Data:', formData); // Log formData

    try {
      await axios.post('http://localhost:8081/orders', {
        username: formData.username,
        email: formData.email,
        address: formData.address,
        phoneNumber: formData.phoneNumber,
        giftName: formData.giftName,
        price: formData.price,
      });
      console.log('Order placed successfully');
      alert('Order placed successfully');
      
      
    } catch (error) {
      console.error('Error submitting order:', error.response ? error.response.data : error.message);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <>
    <User_Nav/>
      <div className='style'>
        <h4 id='tit'>Order Form</h4>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="username" value={formData.username} onChange={handleChange} required />
          </label>
          <br />
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          <br />
          <label>
            Address:
            <textarea name="address" value={formData.address} onChange={handleChange} required />
          </label>
          <br />
          <label>
            Phone Number:
            <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
          </label>
          <br />
          <label>
            Selected Theme:
            <span>{formData.giftName}</span>
          </label>
          <br />
          <label>
            Selected Price:
            <span>{formData.price}</span>
          </label>
          <br />
          <button type="submit" className='button1' disabled={!allFieldsFilled}>Place Order</button>
        </form>
      </div>
    </>
  );
};

export default OrderForm;
