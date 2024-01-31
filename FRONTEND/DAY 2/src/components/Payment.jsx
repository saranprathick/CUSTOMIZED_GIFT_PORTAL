import React from 'react';
import { useLocation } from 'react-router-dom';
import '../assets/css/payment.css';

const OrderConfirmation = () => {
  const location = useLocation();
  const formData = location.state?.formData || {};

  return (
    <>
      <div className='style'>
        <h4 id='tit'>Order Confirmation</h4>
        <form>
          <table>
            <tbody>
              <tr>
                <td><strong>Name:</strong></td>
                <td>{formData.name}</td>
              </tr>
              <tr>
                <td><strong>Email:</strong></td>
                <td>{formData.email}</td>
              </tr>
              <tr>
                <td><strong>Address:</strong></td>
                <td>{formData.address}</td>
              </tr>
              <tr>
                <td><strong>Selected Theme:</strong></td>
                <td>{formData.Themename}</td>
              </tr>
              <tr>
                <td><strong>Selected Price:</strong></td>
                <td>{formData.price}</td>
              </tr>
            </tbody>
          </table>
        </form>
        <button type='button'>Confirm Order</button>
      </div>
    </>
  );
};

export default OrderConfirmation;
