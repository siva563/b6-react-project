import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="header">
      <div className="main-container">
        <div className="mainer-header">
          <div className="logo">
            <img
              src="https://codebegun.com/images/Logos/CB_LOGO_LATEST_TR.png"
              alt="CodeBegun Logo"
            />
          </div>

          <div className="profile">
            <button type="button" className="btn btn-outline-primary">
              Button
            </button>
            <button className="bell" aria-label="Notifications">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell" viewBox="0 0 16 16">
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
              </svg>
            </button>
            <span className="profile-pic">
              <img
                src="https://media.licdn.com/dms/image/v2/D5635AQG6pVEQc2lXdw/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1684824212899?e=1739289600&v=beta&t=gCmBYZTcfuFVVN2wU3phXN6r1G1bRnVcpdfnsNIuSko"
                alt="Profile of Siva"
                loading="lazy"
              />
            </span>
            <div className="user-info">
              <span className="names">Siva</span>
              <span className="role">Administrator</span>
            </div>
          </div>
        </div>

        <div className={`navbar-container ${menuOpen ? "show-menu" : ""}`}>
          <nav className="navbar">
            <Link to={"/"} >Home</Link>
            <Link to={"/interface"} >Interface</Link>
            <Link to={"/components"} >Components</Link>
            <Link to={"/pages"} >Pages</Link>
            <Link to={"/forms"} >Forms</Link>
            <Link to={"/gallery"} >Gallery</Link>
            <Link to={"/documentation"} >Documentation</Link>
          </nav>

          <div className="search-bar">
            <input type="text" placeholder="Search..." className="search-input" />
          </div>
        </div>

        <span className="hamburger" onClick={toggleMenu} aria-label="Menu">
          &#9776;
        </span>
      </div>
    </header>
  );
}

export default Header;
