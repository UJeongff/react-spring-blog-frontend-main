import React from "react";
import { Link } from "react-router-dom"; // React Router의 Link 컴포넌트 가져오기
import "../components/Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* 상단 헤더 */}
      <div className="frame-1">
        <div className="title">가천대학교 중고거래</div>
        <img className="search-icon" src="search.svg" alt="Search" />
      </div>

      {/* 상품 카드 목록 */}
      <div className="item-card">
        <div className="thumbnail"></div>
        <div className="item-text">
          <div className="item-title">두산베어스 유니폼</div>
          <div className="item-meta">2분 전</div>
          <div className="item-price">15,000원</div>
        </div>
      </div>

      <div className="item-card">
        <div className="thumbnail"></div>
        <div className="item-text">
          <div className="item-title">SQLD 노랑이</div>
          <div className="item-meta">5분 전</div>
          <div className="item-price">10,000원</div>
        </div>
      </div>

      <div className="item-card">
        <div className="thumbnail"></div>
        <div className="item-text">
          <div className="item-title">C언어 전공 책</div>
          <div className="item-meta">10분 전</div>
          <div className="item-price">5,000원</div>
        </div>
      </div>

      <div className="item-card">
        <div className="thumbnail"></div>
        <div className="item-text">
          <div className="item-title">노트북 충전기 C타입</div>
          <div className="item-meta">25분 전</div>
          <div className="item-price">3,000원</div>
        </div>
      </div>

      {/* 상품 등록 버튼 */}
      <div className="add-item">
        <div className="add-item-text">+ 상품 등록</div>
      </div>

      {/* 하단 내비게이션 */}
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

export default Home;
