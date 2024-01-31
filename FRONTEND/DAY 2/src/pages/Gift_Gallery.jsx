import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/giftgal.css';

const images = [
  {
    path: '/anniversary',
    src: 'https://images.unsplash.com/photo-1554062816-b36da844f64d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVzYmFuZCUyMGFuZCUyMHdpZmV8ZW58MHx8MHx8fDA%3D',
    alt: 'Gift 1',
    title: 'Anniversary Gift',
  },
  {
    path: '/birthday',
    src: 'https://plus.unsplash.com/premium_photo-1677221924410-0d27f4940396?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmlydGhkYXl8ZW58MHx8MHx8fDA%3D',
    alt: 'Gift 3',
    title: 'Birthday Gift',
  },
  {
    path: '/valentine',
    src: 'https://plus.unsplash.com/premium_photo-1669997826829-99087edafcf6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmFsZW50aW5lJ3MlMjBkYXl8ZW58MHx8MHx8fDA%3D',
    title: 'Valentine Gift',
  },
  {
    path: '/wedding',
    src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdlZGRpbmd8ZW58MHx8MHx8fDA%3D',
    alt: 'Gift 3',
    title: 'Wedding Gift',
  },
  // Add more images as needed
];

const GiftShopGallery = () => {
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <Link key={index} to={image.path} className="gallery-item">
          <img src={image.src} alt={image.alt} title={image.title} />
          <div className="image-title">{image.title}</div>
        </Link>
      ))}
    </div>
  );
};

export default GiftShopGallery;
