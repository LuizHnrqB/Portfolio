import React, { useState } from "react";
import styles from "./sideNavBar.css";
import "font-awesome/css/font-awesome.min.css";

const SideNavBar = () => {
  let [activeDropdown, setActiveDropdown] = useState(false);

  let handleDropdownClick = () => {
    setActiveDropdown(!activeDropdown);
  };

  return (
    <div className={styles.SideNavBar}>
      <div className="sidenav">
        <a href="/">Home</a>
        <div className="line"></div>
        <button
          className={`dropdown-btn ${activeDropdown ? "active" : ""}`}
          onClick={handleDropdownClick}
        >
          SandBox
          <i className="fa fa-caret-down"></i>
        </button>
        <div className={`dropdown-container ${activeDropdown ? "show" : ""}`}>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
        <div className="line"></div>
        <a href="/about">Sobre mim</a>
      </div>
    </div>
  );
};

export default SideNavBar;
