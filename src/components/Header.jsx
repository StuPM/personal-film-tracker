import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "react-slide-out/lib/index.css";
import {
  addApiCallResults,
  addClickedFilmId,
  addSearchTerm,
} from "../features/tracker/trackerSlice";
import { useState } from "react";
import logo from "../assets/SPM.png";

const Header = () => {
  const dispatch = useDispatch();
  const [burger, setBurger] = useState(false);

  const burgerClick = () => {
    setBurger(!burger);
  };

  const onClickResetStore = () => {
    dispatch(addApiCallResults(null));
    dispatch(addClickedFilmId(null));
    dispatch(addSearchTerm(""));
  };

  return (
    <header>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img src={logo} width="112" height="28" alt="Logo" />
          </Link>

          <button
            className={burger ? "navbar-burger is-active" : "navbar-burger"}
            aria-label="menu"
            aria-expanded="false"
            data-target="filmNavBar"
            onClick={burgerClick}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>

        <div
          id="filmNavBar"
          className={burger ? "navbar-menu is-active" : "navbar-menu"}
        >
          <div className="navbar-start">
            <Link className="navbar-item" to="/" onClick={onClickResetStore}>
              Home
            </Link>
            <Link className="navbar-item" to="/about">
              About
            </Link>
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
    </header>
  );
};

export default Header;
