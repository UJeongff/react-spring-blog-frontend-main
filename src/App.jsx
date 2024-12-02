import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Init from "./pages/Init";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import ChatUserid from "./pages/ChatUserid";
import ReviewPage from "./pages/ReviewPage";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* / 경로를 Login 페이지로 설정 */}
        <Route path="/" element={<Login />} />
        <Route path="/init" element={<Init />} />
        <Route path="/home" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/chat/:userid" element={<ChatUserid />} />
        <Route path="/review/:postId" element={<ReviewPage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
