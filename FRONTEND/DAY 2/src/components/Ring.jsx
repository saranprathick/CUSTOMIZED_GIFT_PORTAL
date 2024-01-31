import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/ring.css';
import HorizontalCard from './Horizontal_Card';
import OrderForm from './Order_Form';

const Ring = () => {
  const navigate = useNavigate();
  const [selectedTheme, setSelectedTheme] = useState(null);

  const themeData = [
    {
        themeTitle: 'Silver Ring',
        imageUrl: 'https://images.unsplash.com/photo-1627293509201-cd0c780043e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJpbmdzfGVufDB8fDB8fHww',
        description: 'Rs.5000',
      },
      {
        themeTitle: 'Diamond Ring',
        imageUrl: 'https://images.unsplash.com/photo-1589674781759-c21c37956a44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJpbmd8ZW58MHx8MHx8fDA%3D',
        description: 'Rs.6000',
      },
      {
        themeTitle: 'Gold Ring',
        imageUrl: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmluZ3N8ZW58MHx8MHx8fDA%3D',
        description: 'Rs.5000',
      },
      {
        themeTitle: 'Platinum Ring',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1675719847698-6c8a924b2a7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGxhdGludW0lMjByaW5nfGVufDB8fDB8fHww',
        description: 'Rs.3500',
      },
      {
        themeTitle: 'Bronze Ring',
        imageUrl: 'https://images.unsplash.com/photo-1628872354761-c289e269092f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJvbnplJTIwcmluZ3xlbnwwfHwwfHx8MA%3D%3D',
        description: 'Rs.1000',
      },
  ];

  const handleThemeClick = (theme) => {
    setSelectedTheme(theme);
    navigate(`/order?name=${theme.themeTitle}&price=${theme.description}`);
  };

  return (
    <div>
      <center>
        <div className="themes-container">
          {themeData.map((theme, index) => (
            <HorizontalCard
              key={index}
              themeTitle={theme.themeTitle}
              imageUrl={theme.imageUrl}
              description={theme.description}
              onClick={() => handleThemeClick(theme)}
            />
          ))}
        </div>
      </center>

      {selectedTheme && (
        <div>
          <h2>Order Form</h2>
          <OrderForm selectedTheme={selectedTheme.themeTitle} selectedPrice={selectedTheme.description} />
        </div>
      )}
    </div>
  );
};

export default Ring;
