import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <a
          href="https://www.linkedin.com/in/stuartpmcgee/"
          className="linkedIn"
        >
          <div>Designed by me, Stuart Paul McGee.</div>
        </a>
        <div>&copy; 2023</div>
        <Link to="/admin">⭐</Link>
      </div>
    </footer>
  );
};

export default Footer;
