
import React from 'react';
import { Link } from "react-router-dom";
import '../assets/css/navbar.css';

function CustomNavbar() {
    return (
        <>
            <div className="navbar1">
                <img id='imgs' src='https://w7.pngwing.com/pngs/600/451/png-transparent-gift-box-illustration-gift-card-computer-icons-gift-shop-christmas-gift-box-miscellaneous-angle-text-thumbnail.png' alt="Logo" />
                <div className="wrapper">
                    <svg>
                        <text x="50%" y="50%" dy=".35em" textAnchor="middle">GIFT PORTAL</text>
                    </svg>
                </div>
                <ul className="nav-link1">
                    {/* <li>
                        <Link to="/" style={{ color: 'black', fontSize: '21px' }}>SignUp</Link>
                    </li> */}
                    <li>
                        <Link to="/" style={{ color: 'black', fontSize: '21px' }}>Home</Link>
                    </li>
                    <li>
                        <Link to="/about" style={{ color: 'black', fontSize: '21px' }}>About</Link>
                    </li>
                    <li>
                        <Link to="/adminside" style={{ color: 'black', fontSize: '21px' }}>Admin</Link>
                    </li>
                    <li>
                        <Link to="/signuporIn" style={{ color: 'black', fontSize: '21px' }}>SignUp/In</Link>
                    </li>
                    
                </ul>
            </div>
        </>
    );
}

export default CustomNavbar;

