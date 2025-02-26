import React from "react";
import "../styles/Sidebar.css";

const Sidebar = () => {
  const images = [
    { id: 1, name: "이미지 1", src: "/assets/sample1.jpg" },
    { id: 2, name: "이미지 2", src: "/assets/sample2.jpg" },
    { id: 3, name: "이미지 3", src: "/assets/sample3.jpg" },
  ];

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">보관함</h2>
      <div className="image-list">
        {images.map((img) => (
          <div key={img.id} className="image-item">
            <img src={img.src} alt={img.name} className="image-thumbnail" />
            <p>{img.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
