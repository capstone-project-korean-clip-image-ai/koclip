import React from "react";
import "./../styles/ModelSelector.css";

function ModelSelector({ setModel, selectedModel }) {
  const models = [
      { key: "hanbok", label: "한복" },
      { key: "hanok", label: "한옥" },
      { key: "k-food", label: "한식" },
  ];

  const handleModelClick = (key) => {
    {/* 이미 선택된 모델을 클릭하면 해제 */}
    setModel((prevModel) => (prevModel === key ? "base" : key));
    console.log("model selected", key) ;
  };

  return (
      <div className="model-selector">
          <h3>모델 선택</h3>
          {models.map(({ key, label }) => (
              <button 
                  key={key} 
                  onClick={() => handleModelClick(key)} 
                  className={`model-button ${selectedModel === key ? "selected" : ""}`}
              >
                  {label}
              </button>
          ))}
      </div>
  );
}

export default ModelSelector;
