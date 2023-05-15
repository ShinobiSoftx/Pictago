import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './signup.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/login/post', {
        name: name,
        email: email,
        password: password
      })
      .then((response) => {
        console.log(response);
        toast.dark('Account Created !', {
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
          window.location.href = '/login'
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error, {
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
      });
  };

  return (
    <div className="login-form">
      <h1>Create an account and join Pictago ! </h1>
      <form onSubmit={handleSignup}>
        <label>
          Name:
          <input className="login-input" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input className="login-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input className="login-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button className="login-button" type="submit">Signup</button>
      </form>
      <p className="create-account">Already have an account? <Link className="create-account-link" to="/login">Login</Link></p>
      <ToastContainer />
    </div>
  );
}

export default Signup;
