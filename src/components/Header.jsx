import React from "react";
import SearchBar from "./SearchBar";
import "./styles/Header.scss";
import { Link } from "react-router-dom";
import "react-slide-out/lib/index.css";
import About from "./About";
import logo from "../assets/SPM.png";
import { useState } from "react";

const Header = () => {
  const [burger, setBurger] = useState(false);

  const burgerClick = () => {
    setBurger(!burger);
  };

  return (
    <>
      <nav
        className="navbar has-shadow"
        role="navigation"
        aria-label="main navigation"
      >
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
            className={burger ? "navbar-burger is-active" : "navbar-burger"}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={burgerClick}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          id="navbarBasicExample"
          className={burger ? "navbar-menu is-active" : "navbar-menu"}
        >
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
