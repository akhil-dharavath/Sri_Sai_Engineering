import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {/* SRI SAI ENGINEERING & TECHNICAL SERVICES */}
          <img src={require('../assets/company_images/logo.jpeg')} alt="logo" style={{width:'75px'}}/>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
          style={{ justifyContent: "flex-end" }}
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/principles">
                PRINCIPLES
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                SUPPORT
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/technical">
                    Technical Support
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/non-technical">
                    Non Technical Support
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">
                PROJECTS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/our-equipments">
                OUR EQUIPMENTS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                ABOUT US
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
