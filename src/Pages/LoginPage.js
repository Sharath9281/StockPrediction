import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import '../Photos/LoginandSignupbackground.jpg';
import '../CssStyle/Loginpage.css';
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { handleLogin } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/user/login', { email, password });
      console.log(response.data);
      if (response.status === 200) {
        handleLogin(response.data.user);
        navigate('/');
      }
    } catch (error) {


      console.error(error);
    }
  };

  return (
    <div className="form-container sign-in-container">
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <div className="social-container">
        <a href="#" className="social">
          <i className="fab fa-facebook-f" />
        </a>
        <a href="#" className="social">
          <i className="fab fa-google-plus-g" />
        </a>
        <a href="#" className="social">
          <i className="fab fa-linkedin-in" />
        </a>
      </div>
      <span>or use your account</span>
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label for="">Email</label>
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
                onChange={(e) => setPassword(e.target.value)}
      />
      <label for="">Password</label>
      <a href="#">Forgot your password?</a>
      <button type="submit" Link to='Home.js'>Login</button>
    </form>
  </div>
  );
}

export default LoginForm;