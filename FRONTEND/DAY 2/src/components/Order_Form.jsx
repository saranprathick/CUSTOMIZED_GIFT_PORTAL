import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import OrderConfirmation from './Payment';
import '../assets/css/OrderForm.css';

const OrderForm = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const [formData, setFormData] = useState({
    name: queryParams.get('Themename') || '',
    email: '',
    address: '',
    price: queryParams.get('price') || '',
  });

  useEffect(() => {
    // Set the default values based on the query parameters
    setFormData({
      ...formData,
      Themename: queryParams.get('name') || '',
      price: queryParams.get('price') || '',
    });
  }, [location.search]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className='style'>
        <h4 id='tit'>Order Form</h4>
        <form>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
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
            Selected Theme:
            <span>{formData.Themename}</span>
          </label>
          <br />
          <label>
            Selected Price:
            <span>{formData.price}</span>
          </label>
          <br />
          <button input type='submit'>
          <Link to={{ pathname: "/confirmation", state: { formData } }} className='button1'>Place Order</Link>
          </button>
        </form>
      </div>
    </>
  );
};

export default OrderForm;
