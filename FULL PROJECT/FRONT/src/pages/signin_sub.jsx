import React, { useState } from 'react';
import SignInForm from './SignIn';
import SignUpForm from './SignUp';
import { useNavigate } from 'react-router-dom';
import '../assets/css/styles.css';
import CustomNavbar from '../components/Navbar';

export default function Sign({ setIsAuthenticated }) {
  const [type, setType] = useState('signIn');
  const navigate = useNavigate();

  const handleOnClick = (text) => {
    if (text !== type) {
      setType(text);
    }
  };

  const handleSignIn = (credentials) => {
    // Perform authentication logic for sign-in
    console.log('Sign In:', credentials);

    // Set authentication status to true
    setIsAuthenticated(true);

    // Navigate to the User component after successful sign-in
    navigate('/userhome');
  };

  const handleSignUp = (userData) => {
    // Perform sign-up logic
    console.log('Sign Up:', userData);

    // Set authentication status to true
    setIsAuthenticated(true);

    // Navigate to the User component after successful sign-up
    navigate('/userhome');
  };

  const containerClass =
    'container ' + (type === 'signUp' ? 'right-panel-active' : '');

  return (
    <>
    <CustomNavbar/>
    <div className="App">
      <h2>Sign in/up Form</h2>
      <div className={containerClass} id="container">
        <SignUpForm onSignUp={handleSignUp} />
        <SignInForm onSignIn={handleSignIn} />
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button
                className="ghost"
                id="signIn"
                onClick={() => handleOnClick('signIn')}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start the journey with us</p>
              <button
                className="ghost "
                id="signUp"
                onClick={() => handleOnClick('signUp')}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}