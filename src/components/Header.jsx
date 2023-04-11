import React, { useState } from "react";
import SearchBar from "./SearchBar";
import "./styles/Header.scss";
import { Link } from "react-router-dom";
import Slider from "react-slide-out";
import "react-slide-out/lib/index.css";
import About from "./About";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header>
        <h1>Stuart M Film Tracker</h1>
        <nav>
          <button onClick={onClick}>About</button>
          <SearchBar />
          <button>Stats</button>
          <Link to="/admin">Admin</Link>
        </nav>
      </header>
      <Slider isOpen={isOpen} verticalOffset={{ top: 100 }}>
        <About />
      </Slider>
    </>
  );
};

export default Header;
