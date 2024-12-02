import React from "react";
import "../components/Login.css";

const Login = () => {
  const handleGoogleLogin = () => {
    window.location.href =
      "https://accounts.google.com/signin/oauth/oauthchooseaccount?response_type=code&client_id=779895762817-l1e013ot6dc632aru1sph2verrdjs6rc.apps.googleusercontent.com&scope=openid%20profile%20email&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Foauth%2Fgoogle%2Fcallback&service=lso&o2v=2&ddm=1&flowName=GeneralOAuthFlow";
  };

  return (
    <div className="login">
      {/* 새로운 프레임 디자인 */}
      <div className="frame-1">
        <div className="frame-title">가천대학교 중고거래</div>
      </div>

      {/* 로그인 본문 */}
      <div className="create-an-account">로그인</div>

      {/* Input 박스 + 구글 아이콘 + 텍스트 */}
      <label className="input-group" onClick={handleGoogleLogin}>
        <input type="text" style={{ display: "none" }} />
        <div className="input"></div>
        <img
          className="devicon-google"
          src="/google.svg"
          alt="Google Icon"
        />
        <div className="div">구글로 로그인</div>
      </label>
    </div>
  );
};

export default Login;
