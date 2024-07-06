import '../CssStyle/SignupPage.css'; 
import { Link, useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { handleLogin } = useContext(AuthContext);
  
  const handleRegisterClick = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/user/signup', { name, email, password });
      // Handle successful login (e.g., store token in localStorage, redirect to dashboard)
      console.log(response.data);
      if (response.status === 200) {
        handleLogin(response.data.user);
        navigate('/');
      }
    } catch (error) {
      // Handle login error
      console.error(error);
    }
  };

  return (
    <div className='container'>
      <div className="form-box">
        <form className="form" onSubmit={handleRegisterClick}>
            <span className="title">Sign up</span>
            <span className="subtitle">Create a free account with your email.</span>
            <div className="form-container">
              <input type="text" className="input" placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
              />
              <input type="email" className="input" placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
              />
              <input type="password" className="input" placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type='submit' onClick={handleRegisterClick}>Sign up</button>
        </form>
        <div className="form-section">
          <p>Have an account? <Link to="/login">Log in</Link> </p>
        </div>
        </div>
    </div>
  );
}

export default SignupPage;
