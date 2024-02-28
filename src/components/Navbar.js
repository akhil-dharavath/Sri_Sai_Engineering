import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation().pathname.slice(1);
  console.log(location);
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {/* SRI SAI ENGINEERING & TECHNICAL SERVICES */}
          <img
            src={require("../assets/company_images/logo.jpeg")}
            alt="logo"
          />
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
              <Link className={`nav-link ${location === "" && "active"}`} to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location === "principles" && "active"}`}
                to="/principles"
              >
                Principles
              </Link>
            </li>
            {/* <li className="nav-item dropdown">
              <a
                className={`nav-link dropdown-toggle ${
                  location === "technical" && "active"
                } ${location === "non-technical" && "active"}`}
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Support
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className={`dropdown-item ${location === "technical" && "active"}`} to="/technical">
                    Technical Support
                  </Link>
                </li>
                <li>
                  <Link className={`dropdown-item ${location === "non-technical" && "active"}`} to="/non-technical">
                    Non Technical Support
                  </Link>
                </li>
              </ul>
            </li> */}
            <li className="nav-item">
              <Link className={`nav-link ${location === "technical" && "active"}`} to="/technical">
                Support
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location === "projects" && "active"}`} to="/projects">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location === "our-equipments" && "active"}`} to="/our-equipments">
                Our Equipments
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location === "about" && "active"}`} to="/about">
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
