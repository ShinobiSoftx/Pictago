import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    axios
      .post('http://localhost:5000/login/post', {
        name: name,
        email: email,
        password: password
      })
      .then((success) => {
        navigate('/login');
        console.log(success);
      })
      .catch((error) => {
        console.log(error);
        alert("ERROR");
      });
  };

  return (
    <div className='form' style={{ display: 'flex', backgroundColor: 'primary', height: '65vh' }}>
      <div className='bg-white p-3 rounded w-25'>
        <h2>Sign-Up</h2>
        <form>
          <div className='mb-3'>
            <label htmlFor='name'>
              <strong>Your Full Name</strong>
            </label>
            <input
              type='text'
              id='name'
              placeholder='Enter your name'
              name='name'
              className='form-control rounded-0'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='email'>
              <strong>Your Address Mail</strong>
            </label>
            <input
              type='email'
              placeholder='Enter your email'
              name='email'
              className='form-control rounded-0'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='password'>
              <strong>Your Password</strong>
            </label>
            <input
              type='password'
              placeholder='Enter your password'
              name='password'
              className='form-control rounded-0'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type='submit' className='btn btn-success w-100 rounded-0' onClick={handleSignup}>
            Save
          </button>
          <Link to='/login' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>
            Go back
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
