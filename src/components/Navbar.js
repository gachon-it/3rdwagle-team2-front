import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
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
        <Link to="/login" className="login">로그인</Link>
      </div>
    </nav>
  );
};

export default Navbar;
