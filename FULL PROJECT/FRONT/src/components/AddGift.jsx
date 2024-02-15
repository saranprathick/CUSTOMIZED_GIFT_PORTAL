import React, { useState } from 'react';
import axios from 'axios';
import '../assets/css/giftpage.css';
import Admin_Nav from './Admin_navbar';

function Giftpage() {
  const [gift, setGift] = useState('');
  const [theme, setTheme] = useState('');
  const [price, setPrice] = useState('');
  const [urlPath, setUrlPath] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8081/gifts', {
        giftName: gift,
        giftTheme: theme,
        price: price,
        imageUrl: urlPath,
      });
      console.log(response.data); // Assuming the backend responds with the saved gift details
      alert('Gift added successfully!');
    } catch (error) {
      alert('Oops... Something went wrong!');
    }
  };

  return (
    <>
    <Admin_Nav/>
    <div style={{ textAlign: 'center' }}>
        <center>
      <form className="form12" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="gift">Gift:</label>
          <input
            type="text"
            id="gift"
            value={gift}
            onChange={(e) => setGift(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="theme">Theme:</label>
          <input
            type="text"
            id="theme"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        <div>
          <label htmlFor="urlPath">URL Path:</label>
          <input
            type="text"
            id="urlPath"
            value={urlPath}
            onChange={(e) => setUrlPath(e.target.value)}
          />
        </div>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
        </center>
    </div>
    </>
  );
}

export default Giftpage;
