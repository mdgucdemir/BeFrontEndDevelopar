import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import bg from "../../assets/footer-bg.jpg";
import logo from "../../assets/tmovie.png";

const Footer = () => {
  return (
    <div className="footer" style={{ backgroundImage: `url(${bg})` }}>
      <div className="footer_content container">
        <div className="footer_content_logo">
          <div className="logo">
            <img src={logo} alt="" />
            <Link to="/">tMovies</Link>
          </div>
        </div>
        <div className="footer_content_menus">
          <div className="footer_content_menu">
            <Link to="/">Home</Link>
            <Link to="/">Contact Us</Link>
            <Link to="/">Term of services</Link>
            <Link to="/">About Us</Link>
          </div>
          <div className="footer_content_menu">
            <Link to="/">Live</Link>
            <Link to="/">FAQ</Link>
            <Link to="/">Premium</Link>
            <Link to="/">Pravacy Policy</Link>
          </div>
          <div className="footer_content_menu">
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
