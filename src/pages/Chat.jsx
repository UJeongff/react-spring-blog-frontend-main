import React from "react";
import { Link } from "react-router-dom"; // 페이지 이동을 위한 Link
import "../components/Chat.css";

const ChatItem = ({ username, message, time }) => (
  <div className="chat-item">
    <div className="avatar"></div>
    <div className="chat-info">
      <div className="username">{username}</div>
      <div className="message">{message}</div>
    </div>
    <div className="chat-time">{time}</div>
  </div>
);

const Chat = () => {
  const chatData = [
    { username: "택연맘", message: "네고 가능한가요?", time: "2분 전" },
    { username: "최강곰", message: "거래 잘 했습니다!", time: "5분 전" },
    { username: "현콩이", message: "사용감이 어느정도인가요?", time: "10분 전" },
    { username: "무한이", message: "어디서 볼까요?", time: "15분 전" },
    { username: "가천인", message: "2시 어떤가요", time: "20분 전" },
    { username: "먀관", message: "넵 ㅎㅎ", time: "25분 전" },
    { username: "냠냠이", message: "감사합니다~", time: "30분 전" },
  ];

  return (
    <div className="page">
      <div className="chat">
        {/* 헤더 */}
        <div className="frame-1">
          <div className="title">채팅</div>
        </div>

        {/* 채팅 목록 */}
        <div className="chat-list">
          {chatData.map((chat, index) => (
            <ChatItem
              key={index}
              username={chat.username}
              message={chat.message}
              time={chat.time}
            />
          ))}
        </div>

        {/* 하단 내비게이션 */}
        <div className="chat-bottom-nav">
          <Link to="/chat">
            <img className="nav-icon active" src="/chat.svg" alt="Chat" />
          </Link>
          <Link to="/home">
            <img className="nav-icon" src="/home.svg" alt="Home" />
          </Link>
          <Link to="/user">
            <img className="nav-icon" src="/user.svg" alt="User" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Chat;
