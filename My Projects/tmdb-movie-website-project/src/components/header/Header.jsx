import React, { useState } from "react";
import "./header.scss";

import logo from "../../assets/tmovie.png";
import { BsSearch } from "react-icons/bs";
import { VscChromeClose } from "react-icons/vsc";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchShow, setSearchShow] = useState("");
  const [mobileView, setMobileView] = useState(false);

  const openSearch = () => {
    setSearchShow(true);
    setMobileView(false);
  };

  return (
    <header className={`header ${mobileView ? "mobileView" : ""}`}>
      <div className="header-wrapper">
        <div className="header-logo">
          <img src={logo} alt="logo" />
          <Link to="/">mdMovies</Link>
        </div>
        <div className="navigation">
          <div className="searchIcon">
            <BsSearch onClick={openSearch} />
          </div>
          <ul className="header-nav">
            <li className="header-nav-item">
              <Link to="/my-list">My List</Link>
            </li>
            <li className="header-nav-item">
              <Link to="/movies">Movies</Link>
            </li>
            <li className="header-nav-item">
              <Link to="/tv">Tv Shows</Link>
            </li>
          </ul>
        </div>
      </div>
      {searchShow && (
        <div className="searchBar">
          <div className="searchBar-wrapper">
            <div className="searchInput">
              <input type="text" placeholder="Search Movie or Tv Show..." />
              <VscChromeClose onClick={() => setSearchShow(false)} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
