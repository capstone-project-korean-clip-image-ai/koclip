import React, { useState } from "react";
import axios from 'axios';
import Sidebar from "./components/Sidebar";
import ModelSelector from "./components/ModelSelector";
import StyleSelector from "./components/StyleSelector";
import InputBox from "./components/InputBox";
import GeneratedImage from "./components/GeneratedImage";
import Navbar from "./components/Navbar";
import "./styles/App.css";

function App() {
  const [text, setText] = useState(""); {/* 텍스트 입력 */}
  const [model, setModel] = useState("base"); {/* LoRA 선택 */}
  const [image, setImage] = useState(null); {/* 생성된 이미지 */}

  const generateImage = async () => {

    if (text.trim() === "") {
      alert("이미지 생성할 내용을 입력하세요!");
      return;
    }
    console.log("입력된 텍스트:", text);

    try {
      const response = await axios.post('http://localhost:8000/generate', {
        text,
        model,
      }, { responseType: 'blob' }); // 이미지 파일 받기

      const imageUrl = URL.createObjectURL(response.data);
      setImage(imageUrl);
    } catch (error) {
      console.error('이미지 생성 오류:', error);
    }
  };

  return (
    <div className="app-container">
      <Navbar />
      <div className="content-wrapper">
        <Sidebar />
        <div className="main-container">
          <div className="control-panel">
            <InputBox setText={setText} />
            <ModelSelector setModel={setModel} selectedModel={model}/>
            {/* <StyleSelector /> 현재 쓰지 않으니 비활성*/}
            <button className="generate-button" onClick={generateImage}>이미지 생성</button>
          </div>
          <GeneratedImage image={image} />
        </div>
        <div className="right-sidebar"></div>
      </div>
    </div>
  );
}

export default App;
