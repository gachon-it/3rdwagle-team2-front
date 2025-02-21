import './LoginPage.css';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const LoginPage = ({ onLogin }) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!id && !password) {
      alert("아이디와 비밀번호를 입력하세요.");
      return;
    }
    
    if (!id) {
      alert("아이디를 입력하세요.");
      return;
    }
    
    if (!password) {
      alert("비밀번호를 입력하세요.");
      return;
    }


    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser && loggedInUser.id === id && loggedInUser.password === password) {
      onLogin({ id, password });
      navigate('/');
    } else {
      alert("아이디 또는 비밀번호가 일치하지 않습니다.");
    }
  };

  return(
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="id"
          placeholder='id'
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="password"
          id="password"
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <div className="links-container">
        <span><a href='/login' id='remember'>Remember me</a></span>
        <span><a href='/login' id='forgot'>Forgot Password</a></span>
      </div>
      <Link to="/signup">
        <button>Sign up</button>
      </Link>
    </div>
  );
};

export default LoginPage;