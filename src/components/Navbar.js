import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // ✅ axios 추가
import logo from "../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // ✅ 로그인 상태 관리
  const navigate = useNavigate();

  // ✅ 로그인 여부 확인
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // 토큰이 있으면 true, 없으면 false
  }, []);

  // ✅ 로그아웃 핸들러 (서버 요청 추가)
  const handleLogout = async () => {
    try {
      // 🔥 서버에 로그아웃 요청 보내기
      const token = localStorage.getItem("token");
      await axios.post("http://localhost:3000/user/logout", {}, {
        headers: { Authorization: `Bearer ${token}` } // ✅ JWT 포함
      });

      // ✅ 로컬 스토리지 정리
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setIsLoggedIn(false);
      
      alert("로그아웃되었습니다.");
      navigate("/"); // ✅ 홈으로 이동
    } catch (error) {
      console.error("❌ 로그아웃 오류:", error.response?.data || error);
      alert("로그아웃 실패! 다시 시도해주세요.");
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={logo} alt="Home" />
      </Link>
      <div className="navbar-links">
        <Link to="/group-buy">물건 공동 구매</Link>
        <Link to="/delivery">배달 공동 구매</Link>
        <Link to="/benefits">공용 혜택</Link>
        <Link to="/mypage">마이페이지</Link>

        {/* ✅ 로그인 여부에 따라 버튼 변경 */}
        {isLoggedIn ? (
          <button className="logout" onClick={handleLogout}>로그아웃</button>
        ) : (
          <Link to="/login" className="login">로그인</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
