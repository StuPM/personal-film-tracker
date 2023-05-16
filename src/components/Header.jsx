import React from "react";
import SearchBar from "./SearchBar";
import "./styles/Header.scss";
import { Link } from "react-router-dom";
import "react-slide-out/lib/index.css";

const Header = () => {
  return (
    <>
      <header>
        <h1>Stuart M Film Tracker</h1>
        <nav>
          <button>About</button>
          <SearchBar />
          <button>Stats</button>
          <Link to="/admin">Admin</Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
