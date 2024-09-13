import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./sideNav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faCircleInfo,
  faClapperboard,
  faHouse,
  faSearch,
  faShapes,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import logo from ".././logo-pics/logo.png";

export default function SideNav() {

  const navigate = useNavigate()
  return (
    <div className="nav">
      <div className="sideNav">
        <ul>
          <NavLink className={(e)=> {return e.isActive? "active-color":"fade-color"}} to={"/"}>
            <li>
              <div className="idiv">
                <FontAwesomeIcon icon={faHouse} />
              </div>
              Home
            </li>
          </NavLink>
          <NavLink className={(e)=> {return e.isActive? "active-color":"fade-color"}} to={"/categories"}>
            <li>
              <div className="idiv">
                <FontAwesomeIcon icon={faShapes} />
              </div>
              Categories
            </li>
          </NavLink>
          <NavLink className={(e)=> {return e.isActive? "active-color":"fade-color"}} to={"/movies"}>
            <li>
              <div className="idiv">
                <FontAwesomeIcon icon={faClapperboard} />
              </div>
              Movies
            </li>
          </NavLink>
          <NavLink className={(e)=> {return e.isActive? "active-color":"fade-color"}} to={"/watchlist"}>
            <li>
              <div className="idiv">
                <FontAwesomeIcon icon={faBookmark} />
              </div>
              Watchlist
            </li>
          </NavLink>
          <NavLink className={(e)=> {return e.isActive? "active-color":"fade-color"}} to={"/about-us"}>
            <li>
              <div className="idiv">
                <FontAwesomeIcon icon={faCircleInfo} />
              </div>
              About Us
            </li>
          </NavLink>
          <NavLink className={(e)=> {return e.isActive? "active-color":"fade-color"}} to={"/account"}>
            <li>
              <div className="idiv">
                <FontAwesomeIcon icon={faUser} />
              </div>
              Account
            </li>
          </NavLink>
        </ul>
      </div>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." class="search-input" onChange={(e)=>{navigate(`/search?query=${e.target.value}`)}} />
        <button class="search-btn">
          <FontAwesomeIcon icon={faSearch} />
        </button>
        {/* </Link> */}
      </div>
    </div>
  );
}
