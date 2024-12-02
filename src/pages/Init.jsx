import React, { useState } from "react";
import "../components/Init.css";

const Init = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    studentId: "",
    birth: "",
  });

  const [errors, setErrors] = useState({}); // 에러 상태 관리

  // 입력 필드 변경 핸들러
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: "" }); // 입력 시 에러 제거
  };

  // 제출 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // 입력값 확인
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = "정보를 입력해주세요";
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors); // 에러 상태 업데이트
    } else {
      alert("가입 되었습니다!");
    }
  };

  return (
    <div className="init-page">
      <div className="init-box">
        {/* 헤더 */}
        <div className="init-header">
          <img src="/vector.svg" alt="Logo" className="init-vector" />
          <h1 className="init-title">MungChi Rental</h1>
        </div>

        {/* 본문 */}
        <form className="init-form" onSubmit={handleSubmit}>
          <h2 className="init-subtitle">초기 정보 입력</h2>

          {/* 입력 필드 */}
          {[
            { id: "name", label: "이름", type: "text", placeholder: "홍길동" },
            { id: "email", label: "학교 이메일", type: "email", placeholder: "@gachon.ac.kr" },
            { id: "phone", label: "전화번호", type: "tel", placeholder: "010-0000-0000" },
            { id: "department", label: "학과", type: "text", placeholder: "컴퓨터공학과" },
            { id: "studentId", label: "학번", type: "text", placeholder: "20231234" },
            { id: "birth", label: "생년월일", type: "date", placeholder: "YYYY-MM-DD" },
          ].map(({ id, label, type, placeholder }) => (
            <div key={id} className="input-group">
              <label className="input-label" htmlFor={id}>
                {label}
              </label>
              <input
                id={id}
                className={`init-input ${errors[id] ? "input-error" : ""}`}
                type={type}
                placeholder={placeholder}
                value={formData[id]}
                onChange={handleChange}
              />
              {errors[id] && <span className="error-message">{errors[id]}</span>}
            </div>
          ))}

          {/* 약관 */}
          <div className="init-terms">
            <input type="checkbox" id="terms" className="terms-checkbox" />
            <label htmlFor="terms">
              사기 행각 발각 시 거래 품목 원가의 10배에 해당하는 벌금을 지불할 것에 동의합니다.
            </label>
          </div>

          {/* 버튼 그룹 */}
          <div className="button-group">
            <button type="button" className="init-back-button">
              취소
            </button>
            <button type="submit" className="init-submit-button">
              가입
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Init;
