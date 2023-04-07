import React from "react";
import SearchBar from "./SearchBar";
import "./styles/Header.scss";
import userSVG from "../assets/user-square-svgrepo-com.svg";

const Header = () => {
  return (
    <header>
      <h1>Stuart M Film Tracker</h1>
      <nav>
        <button>About</button>
        <SearchBar />
        <img className="userIcon" src={userSVG} alt="" />
      </nav>
    </header>
  );
};

export default Header;
