import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Init from "./pages/Init";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Chat from "./pages/Chat";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* / 경로를 Login 페이지로 설정 */}
        <Route path="/" element={<Login />} />
        
        {/* /init 경로를 Init 페이지로 설정 */}
        <Route path="/init" element={<Init />} />
        
        {/* 기타 페이지 */}
        <Route path="/home" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  );
};

export default App;
