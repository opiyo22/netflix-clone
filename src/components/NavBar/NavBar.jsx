import React, { useEffect, useRef } from "react";
import "./NavBar.css";
import logo from "../../assets/logo.png";
import search from "../../assets/search_icon.svg";
import bell from "../../assets/bell_icon.svg";
import profile from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";
import { logout } from "../../firebase";

const NavBar = () => {
  const navRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add("nav-dark");
      } else {
        navRef.current.classList.remove("nav-dark");
      }
    });
  }, []);
  return (
    <div className="navbar" ref={navRef}>
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse By Languange</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search} alt="search" className="icons" />
        <p>Children</p>
        <img src={bell} alt="bell" className="icons" />
        <div className="navbar-profile">
          <img src={profile} alt="profile" className="profile" />
          <img src={caret_icon} alt="caret-icon" />
          <div className="dropdown">
            <p onClick={() => logout()}>Signout Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
