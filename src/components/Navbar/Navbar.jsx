import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        ManibhushanKr
      </div>

      <ul className="nav-menu">
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/about">
            About Me
          </NavLink>
        </li>

        <li>
          <NavLink to="/skills">
            Skills
          </NavLink>
        </li>

        <li>
          <NavLink to="/projects">
            Project
          </NavLink>
        </li>

        <li>
          <NavLink to="/experience">
            Education & Experience
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
