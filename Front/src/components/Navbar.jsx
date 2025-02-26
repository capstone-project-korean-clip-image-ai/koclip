import React from "react";
import "./../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">KO-CLIP</div>
      <div className="nav-links">
        <span>소개</span>
        <span>설정</span>
      </div>
    </nav>
  );
}

export default Navbar;