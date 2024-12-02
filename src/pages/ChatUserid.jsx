import React from "react";
import { useParams, Link } from "react-router-dom";
import "../components/ChatUserid.css";

const ChatUserid = () => {
  const { userid, postId  } = useParams(); // URL에서 userid 추출

  return (
    <div className="chat-userid">
      {/* 상단 헤더 */}
      <div className="frame-1">
        <div className="div">채팅</div>
      </div>

      {/* 사용자 정보 및 리뷰쓰기 */}
      <div className="frame-7">
        <div className="review-button">
          <Link to={`/review/${postId}`} className="rectangle2">
            <div className="review">리뷰쓰기</div>
          </Link>
        </div>

        <div className="chat-user-item">
          <div className="chat-user-thumbnail"></div>
          <div className="chat-user-info">
            <div className="username">{userid}</div>
          </div>
        </div>
      </div>

      {/* 채팅 메시지 */}
      <div className="chat-content">
        <div className="bg">네고 가능한가요?</div>
        <div className="bg2">시러</div>
      </div>

      {/* 채팅 입력 */}
      <div className="chat-input-container">
        <input
          type="text"
          className="chat-input"
          placeholder="메시지를 입력하세요..."
        />
        <button className="send-button">전송</button>
      </div>      

      {/* 하단 네비게이션 */}
      <div className="chat-bottom-nav">
        <Link to="/chat">
          <img className="nav-icon active" src="/chat.svg" alt="Chat" />
        </Link>
        <Link to="/home">
          <img className="nav-icon" src="/home.svg" alt="Home" />
        </Link>
        <Link to="/profile">
          <img className="nav-icon" src="/user.svg" alt="User" />
        </Link>
      </div>
    </div>
  );
};

export default ChatUserid;
