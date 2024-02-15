import '../assets/css/mainhome.css';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Admin_Nav from '../components/Admin_navbar';

const images = [
  'https://cdn.shopify.com/s/files/1/0645/5594/2108/files/Hatke_Gifts_Static.jpg?v=1704973449',
  'https://cdn.shopify.com/s/files/1/0645/5594/2108/files/Valentines-Static_-2024.webp?v=1704969910',
  'https://cdn.shopify.com/s/files/1/0645/5594/2108/files/gift_for_wife-static_2024.webp?v=1705051752',
  'https://cdn.shopify.com/s/files/1/0645/5594/2108/files/Scroll_Gifts_Static_2024.webp?v=1705051752',
];

const trendingGifts = [
  { image: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt4prodlp/banners/valentines_day_d_polaroid_5_20240122192254.jpg', title: 'Valentine Polaroid' },
  { image: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt4prodlp/banners/birthday_igp_lenses_20230627.jpg', title: 'Birthday Lenses' },
  { image: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt4prodlp/banners/anniversary_igp_lenses_20230627.jpg', title: 'Anniverysary gifts' },
  { image: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt4prodlp/banners/festival_corporate_gifts_d_polaroid_5_20231221143302.jpg', title: 'Bulk and Corporate gifts' },
  { image: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt4prodlp/banners/wedding_gifts_igp_lenses_20230627.jpg', title: 'Wedding gifts' },
  { image: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt4prodlp/banners/gourmet_igp_lenses_20230627.jpg', title: 'Chalolates' },
  { image: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt4prodlp/banners/fashion_living_igp_lenses_20230627.jpg', title: 'Fashion & Lifestyle' },
  { image: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt4prodlp/banners/new_arrival_igp_lenses_20230627.jpg', title: 'New Arrivals' },
  // Add more trending gift images as needed
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000, // Change the value to 5000 for a 2-second interval
  arrows: false, // Hide arrows
};

const Admin_Home = () => {
  return (
    <>
    <Admin_Nav/>
    <div className='slider-container'>
      <Slider {...sliderSettings}>
        {images.map((image, index) => (
          <div key={index}>
            <img className="slider-image" src={image} alt={`Slider ${index + 1}`} />
          </div>
        ))}
      </Slider>

      <div className='trending-gifts'>
        <h2>Trending Gifts</h2>
        <div className='gift-images'>
          {trendingGifts.map((gift, index) => (
            <div key={index} className='gift-item'>
              <img src={gift.image} alt={`Trending Gift ${index + 1}`} />
              <p className='gift-title'>{gift.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Admin_Home;
