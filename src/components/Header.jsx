import React from "react";
import SearchBar from "./SearchBar";
import "./styles/Header.scss";
import { Link } from "react-router-dom";
import "react-slide-out/lib/index.css";
import About from "./About";

const Header = () => {
  return (
    <>
      <header className="container">
        <h1>SPM - Film Tracker</h1>
        <nav>
          <Link to="/about">About</Link>
          <button>Stats</button>
          <SearchBar />
          <Link to="/admin">Admin</Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
