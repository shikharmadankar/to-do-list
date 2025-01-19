import React from "react";
import "./Navbar.css";
import Logo from "../../Images/Logo.png";
import menu from "../../Images/menu.png";
import search from "../../Images/search.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="navbar-left">
          <img src={menu} alt="" className="menu-icon" />
          <img src={Logo} alt="" className="logo" />
          <div className="option">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>Features</li>
            </ul>
          </div>
        </div>

        <div className="navbar-right">
          <div className="search">
            <input type="text" className="text" />
            <button>
              <img src={search} alt="" />
            </button>
          </div>
          <p className="profile">S</p>

          <div className="sigin">
            
              <Link to="/login">  <button>SigIn / Login</button></Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
