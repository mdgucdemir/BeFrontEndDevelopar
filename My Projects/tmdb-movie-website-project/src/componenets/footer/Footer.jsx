import React from "react";
import "./style.scss";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import ContentWrapper from "../contentWrapper/ContentWrapper";


const Footer = () => {
  
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
        </ul>
        <div className="infoText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, eos
          a? Quaerat saepe, ex voluptate iste eligendi qui vero sed mollitia
          veniam aliquid tenetur repudiandae nulla laboriosam, exercitationem
          sit adipisci amet libero consequuntur neque voluptates animi! Corrupti
          porro nihil eveniet libero vitae rem harum, cum, eos itaque iste
          repellat illum?
          
        </div>
        <div className="socialIcons">
          <a href="https://facebook.com" target="_blank" className="icon" rel="noreferrer"><FaFacebookF /></a>
          <a href="https://instagram.com" target="_blank" className="icon" rel="noreferrer"><FaInstagram /></a>
          <a href="https://twitter.com" target="_blank" className="icon" rel="noreferrer"><FaTwitter /></a>
          <a href="https://linkedin.com" target="_blank" className="icon" rel="noreferrer">< FaLinkedin/></a>
          
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
