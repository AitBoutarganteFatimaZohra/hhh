import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';

const LoginPage = () => {
  const navigate = useNavigate(); // Initialize the navigate function
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Add your login logic here (e.g., validate credentials)
    // If login is successful, navigate to the home page
    if (email && password) {
      // Navigate to the home page
      navigate('/');
    } else {
      alert('Please enter valid credentials');
    }
  };

  return (
    <div className="auth-container">
      <h1>Login</h1>
      <form className="auth-form" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
};

export default LoginPage;
