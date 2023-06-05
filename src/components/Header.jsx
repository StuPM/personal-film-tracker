import React from "react";
import SearchBar from "./SearchBar";
import "./styles/Header.scss";
import { Link } from "react-router-dom";
import "react-slide-out/lib/index.css";
import About from "./About";
import logo from "../assets/SPM.png";

const Header = () => {
  return (
    <>
      {/* <header className="container">
        <h1>SPM - Film Tracker</h1>
        <nav>
          <Link to="/about">About</Link>
          <button>Stats</button>
          <SearchBar />
          <Link to="/admin">Admin</Link>
        </nav>
      </header> */}
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
            />
          </a>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" to="/">
              Home
            </Link>
            <Link className="navbar-item" to="/about">
              About
            </Link>
            <a className="navbar-item">Stats</a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link className="button is-light" to="/admin">
                  Admin
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
