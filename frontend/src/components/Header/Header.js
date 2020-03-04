import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        <img
          src=""
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
        />
        TextBoard
      </Link>
    </nav>
  );
};

export default Header;
