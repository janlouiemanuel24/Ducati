import React, { useState } from 'react';
import './Signup.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      alert ("Logged as admin !")
      setError('');
    } else if (username === '' && password === '') {
      alert ("Fill The Blank");
      setError('');
    } 
    else if (username === ''){
      alert ("Fill your username !")
    } else if (password === ''){
      alert ("Fill your password !")
      
    }
    else {
      setError('Invalid username or password !');
      
    }
  };

  return (

    <container className='container'>
    <div className="login-page">
     <h2 id='login-title'>Sign up</h2>
      <form>
        <div className="form-group">
          <label id='login-textbox' className='input-title' htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className='input-title' htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className='input-title' htmlFor="password">Repeat Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="button" onClick={handleLogin}>Signup</button>
      </form>
    </div>
    </container>
  );
};

export default LoginPage;