import './LoginPage.css';
import React from 'react';

const LoginPage = () => {
    return(
    <div className="container">
      <h1>Login</h1>
      <input type="text" id="text" placeholder='id'/>
      <input type="text" id="password" placeholder='password'/>
      <button>Sign up with email</button>
      <div className="links-container">
        <span><a href='/login' id='remember'>Remember me</a></span>
        <span><a href='/login' id='forgot'>Forgot Password</a></span>
      </div>
    </div>
    );
};

export default LoginPage;