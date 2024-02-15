// GiftDetailsPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Admin_Nav from './Admin_navbar';
import '../assets/css/gifts.css';

function GiftDetailsPage() {
  const [gifts, setGifts] = useState([]);
  const [editedGift, setEditedGift] = useState(null);

  useEffect(() => {
    // Fetch gifts when the component mounts
    fetchGifts();
  }, []);

  const fetchGifts = async () => {
    try {
      const response = await axios.get('http://localhost:8081/gifts/all');
      setGifts(response.data);
    } catch (error) {
      console.error('Error fetching gifts:', error);
    }
  };

  const handleEdit = (gift) => {
    setEditedGift(gift);
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:8081/gifts/${editedGift.id}`, editedGift);
      console.log('Gift updated successfully:', response.data);
      // Refresh the gift list after updating
      fetchGifts();
      // Clear the editedGift state
      setEditedGift(null);
    } catch (error) {
      console.error('Error updating gift:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8081/gifts/${id}`);
      // Remove the deleted gift from the state
      setGifts(gifts.filter(gift => gift.id !== id));
      console.log('Gift deleted successfully');
    } catch (error) {
      console.error('Error deleting gift:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedGift({
      ...editedGift,
      [name]: value
    });
  };

  return (
    <>
    <Admin_Nav/>
    <div className="gifts-container">
      {gifts.map(gift => (
        <div key={gift.id} className="gift-card">
          <img src={gift.imageUrl} alt="Gift" />
          <h3>{gift.giftName}</h3>
          <p>Theme: {gift.giftTheme}</p>
          <p>Price: {gift.price}</p>
          <button onClick={() => handleEdit(gift)}>Edit</button>
          <button onClick={() => handleDelete(gift.id)}>Delete</button>
          {/* Render edit form or modal */}
          {editedGift && editedGift.id === gift.id && (
            <div>
              <input type="text" name="giftName" value={editedGift.giftName} onChange={handleChange} />
              <input type="text" name="giftTheme" value={editedGift.giftTheme} onChange={handleChange} />
              <input type="number" name="price" value={editedGift.price} onChange={handleChange} />
              <button onClick={handleUpdate}>Save</button>
            </div>
          )}
        </div>
      ))}
    </div>
    </>
  );
}

export default GiftDetailsPage;
