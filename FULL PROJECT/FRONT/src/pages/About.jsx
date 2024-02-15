import React, { Component } from 'react';
import '../assets/css/aboutus.css';
import imgs from '../assets/images/img1.mp4';
import CustomNavbar from '../components/Navbar';
function About() {
    return ( 
        <>
        <CustomNavbar/>
        <center>
        <div className='main1'>
            <div>
                <video className='logo' autoPlay loop muted style={{width:'350px',padding:'20px'}}>
                <source src={imgs} type='video/mp4'/>
                </video>
            <h4>
            Gifts are a way to show love, appreciation, and gratitude. They can be anything from toys, books, 
            clothes, or even time spent together. The Importance of Gifts Gifts are not just about the material 
            things. They symbolize the giver’s affection and thoughtfulness. They help in strengthening relationships 
            and creating happiness.
            </h4>
            <h1>Share With Your Friends</h1>
            <div className='icons'>
                <img src='https://cdn.iconscout.com/icon-pack/preview-mockup/free-social-media-color-3924.png?f=avif&h=240&modified_at=1494583291' />
            </div>
            </div>
        </div>
        </center>


        </>
     );
}

export default About;