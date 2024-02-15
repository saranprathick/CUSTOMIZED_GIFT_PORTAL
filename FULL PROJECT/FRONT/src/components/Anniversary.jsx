import React from 'react';
import Slider from 'react-slick';
import CardNews from '../components/CardNews';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../assets/css/anniversary.css';

const AnniversaryComponent = () => {
  const images = [
    {
      imageUrl: "https://images.unsplash.com/photo-1589674781759-c21c37956a44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJpbmd8ZW58MHx8MHx8fDA%3D",
      rating: 4,
      quote: "Ring"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FrZXN8ZW58MHx8MHx8fDA%3D",
      rating: 4,
      quote: "Cakes"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1494972308805-463bc619d34e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D",
      rating: 4,
      quote: "Flowers"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1636103952204-0b738c225264?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG5lY2tsYWNlfGVufDB8fDB8fHww",
      rating: 4,
      quote: "Necklace"
    },
    // Add more image data as needed
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    centerPadding: '0',
    focusOnSelect: true,
    accessibility: true,
  };

  return (
    <div id="home_parent">
      <div className="App1">
        <Slider {...sliderSettings}>
          {images.map((image, index) => (
            <div key={index} className="slider-item">
              <CardNews imageUrl={image.imageUrl} rating={image.rating} quote={image.quote} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default AnniversaryComponent;
