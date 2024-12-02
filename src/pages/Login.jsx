import React from "react";
import "../components/Login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="mung-chi-rental">MungChi Rental</div>
      <img className="vector" src="/vector.svg" alt="Vector Icon" />
      <div className="create-an-account">로그인</div>
      <div className="input"></div>
      <img className="devicon-google" src="/google.svg" alt="Google Icon" />
      <div className="div">구글로 로그인</div>
    </div>
  );
};

export default Login;
