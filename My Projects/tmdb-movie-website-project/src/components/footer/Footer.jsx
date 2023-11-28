import React from "react";
import "./footer.scss";
import logo from "../../assets/tmovie.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content-wrapper">
        <div className="footer-content-logo">
          <div className="logo">
            <img src={logo} alt="" />
            <Link to="/">mdMovies</Link>
          </div>
        </div>
        <div className="footer-content-menus">
          <div className="footer-content-menu">
            <Link to="/">Home</Link>
            <Link to="/">Contact Us</Link>
            <Link to="/">Term of services</Link>
            <Link to="/">About Us</Link>
          </div>
          <div className="footer-content-menu">
            <Link to="/">Live</Link>
            <Link to="/">FAQ</Link>
            <Link to="/">Premium</Link>
            <Link to="/">Pravacy Policy</Link>
          </div>
          <div className="footer-content-menu">
            <Link to="/">You Must Watch</Link>
            <Link to="/">Recent Release</Link>
            <Link to="/">Top TMDB</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
