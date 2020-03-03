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
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
        />
      </form>
    </nav>
  );
};

export default Header;
