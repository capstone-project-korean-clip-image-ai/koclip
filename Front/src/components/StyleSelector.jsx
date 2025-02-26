import React from "react";
import "./../styles/StyleSelector.css";

function StyleSelector() {
  return (
    <div className="style-selector">
      <h3>스타일 선택</h3>
      <button>실사</button>
      <button>애니메이션</button>
      <button>수묵화</button>
      <button>전통화</button>
    </div>
  );
}

export default StyleSelector;