import React from "react";
import "../styles/GeneratedImage.css";

function GeneratedImage({ image }) {

  return (
    <div className="generated-image-section">
      <h3 className="generated-image-title">생성된 이미지</h3>
      <div className="generated-image-container">
        {image ? (
          <img src={image} alt="Generated" className="generated-image" />
        ) : (
          <p>이미지가 여기에 표시됩니다.</p>
        )}
      </div>
    </div>
  );
}

export default GeneratedImage;
