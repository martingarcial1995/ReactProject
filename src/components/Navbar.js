import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => (
  <div className="navbar">
    <ul className="navbar__list">
      <Link to="/">
        <li className="navbar__list-item">Home</li>
      </Link>
      <Link to="/crud">
        <li className="navbar__list-item">Crud</li>
      </Link>
    </ul>
  </div>
);

export default Navbar;
