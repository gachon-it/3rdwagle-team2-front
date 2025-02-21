import './LoginPage.css';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios'; // ✅ axios 추가

const LoginPage = ({ onLogin }) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false); // ✅ 중복 요청 방지
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!userId.trim() || !password.trim()) {
      alert("아이디와 비밀번호를 입력하세요.");
      return;
    }

    setIsLoading(true); // ✅ 로딩 시작

    try {
      const response = await axios.post("http://localhost:3000/user/login", {
        userId,
        password
      }, {
        headers: {
          "Content-Type": "application/json" // ✅ JSON 요청 설정 (CORS 문제 방지)
        }
      });

      console.log("✅ 로그인 응답:", response.data);

      if (response.status === 200) {
        alert("로그인 성공!");
        
        // ✅ JWT 토큰을 localStorage에 저장
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));

        // ✅ 부모 컴포넌트로 로그인 상태 전달 (선택적)
        if (onLogin) {
          onLogin(response.data.user);
        } 

        navigate('/'); // ✅ 로그인 성공 후 홈으로 이동
      }
    } catch (error) {
      console.error("❌ 로그인 오류:", error.response?.data || error);
      alert(error.response?.data?.error || "로그인 실패");
    } finally {
      setIsLoading(false); // ✅ 로딩 종료
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="userId"
          placeholder='아이디'
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <input
          type="password"
          id="password"
          placeholder='비밀번호'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "로그인 중..." : "Login"}
        </button>
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
