// SignUpForm.jsx
import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function SignUpForm({ onSignUp, setUserDetails }) {
  const navigate = useNavigate();

  const [state, setState] = React.useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    role: 'USER', // Default role is set to "user"
  });

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  const handleOnSubmit = async (evt) => {
    evt.preventDefault();

    const { name, email, password, confirmPassword, phoneNumber, role } = state;

    // Check if any field is empty
    for (const key in state) {
      if (state[key] === '') {
        alert(`${key} is not filled.`);
        return;
      }
    }

    // Password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+={}[\]:;<>,.?~\\/-]).{12,}$/;
    if (!passwordRegex.test(password)) {
      alert('Password must contain at least 12 characters with 1 lowercase, 1 uppercase, and 1 symbol.');
      return;
    }

    // Phone number validation
    const phoneNumberRegex = /^\d{10}$/;
    if (!phoneNumberRegex.test(phoneNumber)) {
      alert('Phone number must have 10 digits.');
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      alert('Passwords do not match. Please re-enter.');
      return;
    }

    try {
      // Make a POST request to your backend endpoint
      const response = await axios.post('http://localhost:8081/api/v1/auth/register', {
        name,
        email,
        password,
        confirmPassword,
        phoneNumber,
        role,
      });

      // Handle response accordingly (e.g., redirect, show success message)
      console.log('SignUp successful:', response.data);

      // Dispatch action to update user details in Redux
      setUserDetails({ name, email, role });

      // Perform sign-up logic or call onSignUp callback
      if (onSignUp) {
        onSignUp({ name, email, password, confirmPassword, phoneNumber, role });
      }

      // Redirect based on user role
      if (role === 'USER') {
        navigate('/userhome');
      } else if (role === 'ADMIN') {
        navigate('/adminhome');
      }

      // Clear form fields after submission
      setState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        role: 'USER',
      });
    } catch (error) {
      console.error('Error signing up:', error.response ? error.response.data : error.message);
      // Handle error (e.g., show error message to the user)
    }
  };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Create Account</h1>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <input
          type="password"
          name="confirmPassword"
          value={state.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
        />
        <input
          type="text"
          name="phoneNumber"
          value={state.phoneNumber}
          onChange={handleChange}
          placeholder="Phone Number"
        />
        <div>
          <label>Role:</label>
          <select name="role" value={state.role} onChange={handleChange}>
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
          </select>
        </div>
        <button>Sign Up</button>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setUserDetails: (details) => dispatch({ type: 'SET_USER_DETAILS', payload: details }),
});

export default connect(null, mapDispatchToProps)(SignUpForm);
