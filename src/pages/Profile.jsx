import React from "react";
import { Link } from "react-router-dom";
import "../components/Profile.css";

const Profile = () => {
  return (
    <div className="profile">
      {/* 상단 헤더 */}
      <div className="frame-1">
        <div className="div">프로필 조회</div>
      </div>

      {/* 사용자 정보 */}
      <div className="input"></div>
      <div className="username2">이름</div>
      <div className="username3">홍길동</div>
      <div className="input2"></div>
      <div className="username4">이메일</div>
      <div className="username5">@gachon.ac.kr</div>
      <div className="input3"></div>
      <div className="username6">학과</div>
      <div className="username7">컴퓨터공학과</div>

      {/* 하단 네비게이션 */}
      <div className="home-bottom-nav">
        <Link to="/chat">
          <img className="nav-icon" src="chat.svg" alt="Chat" />
        </Link>
        <Link to="/home">
          <img
            className="nav-icon active"
            src="/home.svg"
            alt="Home"
          />
        </Link>
        <Link to="/profile">
          <img className="nav-icon" src="user.svg" alt="User" />
        </Link>
      </div>
    </div>
  );
};

export default Profile;
