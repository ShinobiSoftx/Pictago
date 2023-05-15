
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from'react-router-dom';
import './login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Login() {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      console.log('User exists!');
      toast.dark('Login successful ! Redirecting you to the home page ! ', {
        position: 'bottom-center',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          backgroundColor: '#1E1E1E',
          color: '#FFFFFF',
          fontFamily: 'Arial, sans-serif',
          fontWeight: 'bold',
        },
      });
      setTimeout(() => {
        window.location.href = '/posts';
      }, 2000);
    } else {
      console.log('User not found.');
      toast.error('Invalid email or password!', {
        position: 'bottom-center',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          backgroundColor: '#1E1E1E',
          color: '#FFFFFF',
          fontFamily: 'Arial, sans-serif',
          fontWeight: 'bold',
        },
      });
    }
  };
  return (
<form onSubmit={handleSubmit} className="login-form">
  <h1>Login to your account !</h1>
  <label htmlFor="email-input">Your Email:</label>
  <input type="email" id="email-input" value={email} onChange={event => setEmail(event.target.value)} className="login-input" />

  <label htmlFor="password-input">Your Password:</label>
  <input type="password" id="password-input" value={password} onChange={event => setPassword(event.target.value)} className="login-input" />

  <button type="submit" className="login-button">Login</button>
  <p className="create-account">Don't have an account?</p>
  <Link to='/Signup' className='create-account-link'>Create Account</Link>
  <ToastContainer />
</form>


  );
}
export default Login ;