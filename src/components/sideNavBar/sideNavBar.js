import React, { useState } from "react";
import styles from "./sideNavBar.css";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";

const SideNavBar = () => {
  let [activeDropdown, setActiveDropdown] = useState(false);

  let handleDropdownClick = () => {
    setActiveDropdown(!activeDropdown);
  };

  return (
    <div className={styles.SideNavBar}>
      <div className="sidenav">
        <Link to="/">Home</Link>
        <div className="line"></div>
        <button
          className={`dropdown-btn ${activeDropdown ? "active" : ""}`}
          onClick={handleDropdownClick}
        >
          SandBox
          <FiChevronDown className="iconDrop" />
        </button>
        <div className={`dropdown-container ${activeDropdown ? "show" : ""}`}>
          <a href="/sandbox1">Caixa de areia 1</a>
          <a href="/sandbox2">Caixa de areia 2</a>
          <a href="/sandbox3">Caixa de areia 3</a>
        </div>
        <div className="line"></div>
        <Link to="/about">Sobre mim</Link>
      </div>
    </div>
  );
};

export default SideNavBar;
