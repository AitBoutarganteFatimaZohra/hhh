import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const RegisterPage = () => {
  return (
    <div className="auth-container">
      <h1>Register</h1>
      <form className="auth-form">
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <input type="password" placeholder="Confirm Password" required />
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
