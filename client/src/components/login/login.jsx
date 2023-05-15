
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from'react-router-dom';

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
      // Do something here, like redirect to a new page
    } else {
      console.log('User not found.');
      // Display an error message
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={event => setEmail(event.target.value)} />
      <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
      <button type="submit">Login</button>
      <Link to='/Signup' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>
            Create Account
          </Link>
    </form>
  );
}
export default Login ;