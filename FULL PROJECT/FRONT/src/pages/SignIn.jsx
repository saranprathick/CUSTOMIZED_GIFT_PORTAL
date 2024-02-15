// SignInForm.jsx
import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignInForm({ onSignIn, setUserDetails }) {
  const navigate = useNavigate();

  const [state, setState] = React.useState({
    email: '',
    password: '',
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

    const { email, password, role } = state;

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

    try {
      // Make a POST request to your backend endpoint for sign-in
      const response = await axios.post('http://localhost:8081/api/v1/auth/authenticate', {
        email,
        password,
        role,
      });

      // Handle response accordingly (e.g., redirect, show success message)
      console.log('Sign in successful:', response.data);

      // Perform sign-in logic or call onSignIn callback
      if (onSignIn) {
        onSignIn({ email, password, role });
      }

      // Redirect based on user role
      if (role === 'USER') {
        navigate('/userhome');
      } else if (role === 'ADMIN') {
        navigate('/adminhome');
      }

      // Update user details in Redux
      setUserDetails({ email, role });

      // Clear form fields after submission
      setState({
        email: '',
        password: '',
        role: 'USER',
      });
    } catch (error) {
      console.error('Error signing in:', error.response ? error.response.data : error.message);
      // Handle error (e.g., show error message to the user)
    }
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Sign in</h1>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />
        <div>
          <label>Role:</label>
          <select name="role" value={state.role} onChange={handleChange}>
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
          </select>
        </div>
        <a href="#">Forgot your password?</a>
        <button>Sign In</button>
      </form>
    </div>
  );
}

export default SignInForm;
