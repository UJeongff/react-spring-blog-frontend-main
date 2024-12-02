import React from "react";
import { useParams, Link } from "react-router-dom";
import "../components/ReviewPage.css";

const ReviewPage = () => {
  const { postId } = useParams(); // URL에서 postId 추출

  return (
    <div className="review-page">
      <div className="header">
        <Link to="/chat" className="back-button">뒤로</Link>
        <h1>리뷰 작성</h1>
      </div>
      <div className="content">
        <h2>제품 ID: {postId}</h2>
        <textarea placeholder="리뷰를 작성하세요..." />
        <button className="submit-button">리뷰 제출</button>
      </div>
    </div>
  );
};

export default ReviewPage;
