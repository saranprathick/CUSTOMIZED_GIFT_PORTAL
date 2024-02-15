import React, { useState } from 'react';
import Slider from 'react-slick';
import CardNews from '../components/CardNews';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../assets/css/category.css';

const Category = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [showDashboardDetails, setShowDashboardDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleToggleDashboardDetails = () => {
    setShowDashboardDetails(!showDashboardDetails);
  };

  const images1 = [
    {
      imageUrl: "https://images.unsplash.com/photo-1505043203398-7e4c111acbfa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhciUyMGdpZnR8ZW58MHx8MHx8fDA%3D",
      rating: 4,
      quote: "teddy"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1505043203398-7e4c111acbfa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhciUyMGdpZnR8ZW58MHx8MHx8fDA%3D",
      rating: 4,
      quote: "teddy"
    },
    // Add more image data as needed
  ];

  const images2 = [
    {
      imageUrl: "https://images.unsplash.com/photo-1505043203398-7e4c111acbfa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhciUyMGdpZnR8ZW58MHx8MHx8fDA%3D",
      rating: 4,
      quote: "teddy"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1505043203398-7e4c111acbfa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhciUyMGdpZnR8ZW58MHx8MHx8fDA%3D",
      rating: 4,
      quote: "teddy"
    },
    // Add more image data as needed
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div id="home_parent">
        <div className="App1">
          <Slider {...sliderSettings}>
            {images1.map((image, index) => (
              <div key={index}>
                <CardNews imageUrl={image.imageUrl} rating={image.rating} quote={image.quote} />
              </div>
            ))}
          </Slider>
          <Slider {...sliderSettings}>
            {images2.map((image, index) => (
              <div key={index}>
                <CardNews imageUrl={image.imageUrl} rating={image.rating} quote={image.quote} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Category;
