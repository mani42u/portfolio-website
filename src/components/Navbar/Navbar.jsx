import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import menuOpenIcon from "../../assets/menu_open.svg";
import menuCloseIcon from "../../assets/menu_close.svg";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="nav-logo">ManibhushanKr</div>

      {/* -------- HAMBURGER / CLOSE ICON -------- */}
      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? 
        <img src={menuCloseIcon} alt="Close Menu" className="menu-icon"/> : 
        <img src={menuOpenIcon} alt="Open Menu" className="menu-icon"/>}
      </div>

      {/* -------- MENU -------- */}
      <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
        <li onClick={() => setMenuOpen(false)}>
          <NavLink to="/" end>Home</NavLink>
        </li>

        <li onClick={() => setMenuOpen(false)}>
          <NavLink to="/about">About Me</NavLink>
        </li>

        <li onClick={() => setMenuOpen(false)}>
          <NavLink to="/skills">Skills</NavLink>
        </li>

        <li onClick={() => setMenuOpen(false)}>
          <NavLink to="/projects">Project</NavLink>
        </li>

        <li onClick={() => setMenuOpen(false)}>
          <NavLink to="/experience">Education & Experience</NavLink>
        </li>

        <li onClick={() => setMenuOpen(false)}>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
