import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useAuth } from './AuthContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the username and password
    if (email === 'maurice@tran.com' && password === 'correct') {
      login();
      // Create the user object
      const user = {
        id: uuidv4(),
        email: email,
        password: password,
        isSuperadmin: true,
      };

      // Store the user object in localStorage
      localStorage.setItem('users', JSON.stringify(user));

      // Redirect to the /features page
      navigate('/features');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      <h2>login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input 
            placeholder='email'
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            placeholder='password'
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
