import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile6 from "../Assets/profile-6.png";
import profile7 from "../Assets/profile-7.png";
import {
  // faCommentDots,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
// import { toast } from "react-toastify";

function Navbar() {
  const [nav, setNav] = useState(false);
  // const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  // const handleChatBtnClick = () => {
  //   if (!isButtonDisabled) {
  //     toast.info("Experiencing high traffic, Please wait a moment.", {
  //       position: toast.POSITION.TOP_CENTER,
  //       onOpen: () => setIsButtonDisabled(true),
  //       onClose: () => setIsButtonDisabled(false),
  //     });
  //   }
  // };

  return (
    <div className="navbar-section ">
    
      <h1 className="navbar-title">
        <Link to="/">
         <img src={profile7} alt="" /><img className="navbar-sign" src={profile6} alt="" />
        </Link>
      </h1>

      {/* Desktop */}
      <ul className="navbar-items">
        <li>
          <Link to="/" className="navbar-links">
            Home
          </Link>
        </li>
        <li>
          <a href="#services" className="navbar-links">
            Services
          </a>
        </li>
        <li>
          <a href="#about" className="navbar-links">
            About
          </a>
        </li>
        <li>
          <a href="#reviews" className="navbar-links">
            Reviews
          </a>
        </li>
        <li>
          <a href="#doctors" className="navbar-links">
            Doctors
          </a>
        </li>
        <li>
          <a href="#Feedback" className="navbar-links">
            Subscribe
          </a>
        </li>
      </ul>

      {/* <button
        className="navbar-btn"
        type="button"
        disabled={isButtonDisabled}
        onClick={handleChatBtnClick}
      >
        <FontAwesomeIcon icon={faCommentDots} /> Live Chat
      </button> */}
       {/* This is same as 2nd line the top of btn Live chatt // */}

      {/* Mobile */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
         <div onClick={openNav} className="mobile-navbar-close">
          <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
        </div> 
        {/* it also live chatt btn the imp 2nd line is imported */}

        <ul className="mobile-navbar-links">
          <li>
            <Link onClick={openNav} to="/">
              Home
            </Link>
          </li>
          <li>
            <a onClick={openNav} href="#services">
              Services
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#about">
              About
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#reviews">
              Reviews
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#doctors">
              Doctors
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="mobile-nav">
        <FontAwesomeIcon
          icon={faBars}
          onClick={openNav}
          className="hamb-icon"
        />
      </div>
    </div>
  );
}

export default Navbar;
