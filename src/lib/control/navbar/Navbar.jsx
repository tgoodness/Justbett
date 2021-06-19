import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import "./style.scss";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  const handleScreen = () => {
    const width = window.innerWidth;
    if (width >= 768) setIsMobile(false);
    else console.log(width);
  };

  document.getElementById("root").onmouseover = function () {
    console.log(11);
  };

  return (
    <nav className="nav-bar">
      <h3 className="logo">Logo</h3>
      <ul
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
      >
        <Link to="#">
          <li>Home </li>
        </Link>
        <Link to="#">
          <li>About </li>
        </Link>
        <Link to="#">
          <li>Contact Us</li>
        </Link>
        <Link to="#">
          <li>Log In</li>
        </Link>
        <Link to="#">
          <li>Sign Up</li>
        </Link>
      </ul>
      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? <CloseOutlined /> : <MenuOutlined />}
      </button>
    </nav>
  );
}

export default Navbar;
