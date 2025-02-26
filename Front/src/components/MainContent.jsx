import React from "react";
import "./../styles/MainContent.css"; // 메인 콘텐츠 스타일 적용

function MainContent() {
  return (
    <div className="main-content">
      <h1>KO-CLIP</h1>
      <div className="example-prompts">
        <div className="prompt-box">조선 시대 궁궐의 모습을 그려줘.</div>
        <div className="prompt-box">전통 한복을 입은 사람들의 단풍놀이 장면을 보여줘.</div>
        <div className="prompt-box">전통 사극에 나올 법한 왕과 왕비의 모습을 생성해줘.</div>
      </div>
    </div>
  );
}

export default MainContent;
