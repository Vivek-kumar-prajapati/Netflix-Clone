import "./Navbar.css";
import logo from "../../assets/logo.png";
import searchIcon from "../../assets/search_icon.svg";
import bellIcon from "../../assets/bell_icon.svg";
import profileImg from "../../assets/profile_img.png";
import caretIcon from "../../assets/caret_icon.svg";
import { useEffect, useRef } from "react";
import { logOut } from "../../firebse";
const Navbar = () => {

  const navref =useRef();

  useEffect(()=>{

  window.addEventListener("scroll",()=>{

    if(window.scrollY>=80){
      navref.current.classList.add("nav-dark");

    }else{
      navref.current.classList.remove("nav-dark");
    }

  })

  },[])
  return (
    <div className="navbar"  ref={navref}>
      <div className="navbar-left">
        <img src={logo} alt="logo" />
        <ul>
          <li>Home</li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li> Browse by Language</li>
        </ul>
      </div>

      <div className="navbar-right">
        <img src={searchIcon} alt="Search Icon" className="icon" />
        <p>Children</p>
        <img src={bellIcon} alt="Bell Icon" className="icon" />

        <div className="navbar-profile">
          <img src={profileImg} alt="Bell Icon" className="profile" />
          <img src={caretIcon} alt="caret Icon" className="caret-icon" />
          <div className="dropDown">
            <p onClick={()=>{logOut()}}>Sign Out from Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
