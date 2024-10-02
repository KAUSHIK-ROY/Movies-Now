import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
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
  return (
    <div className="nav">
      <div className="sideNav">
        <ul>
          <NavLink
            className={(e) => {
              return e.isActive ? "active-color" : "fade-color";
            }}
            to={"/"}
          >
            <li>
              <div className="idiv">
                <FontAwesomeIcon icon={faHouse} />
              </div>
             <h4>Home</h4>
            </li>
          </NavLink>
          <NavLink
            className={(e) => {
              return e.isActive ? "active-color" : "fade-color";
            }}
            to={"/search"}
          >
            <li>
              <div className="idiv">
                <FontAwesomeIcon icon={faSearch} />
              </div>
              <h4>Search</h4>
            </li>
          </NavLink>
          <NavLink
            className={(e) => {
              return e.isActive ? "active-color" : "fade-color";
            }}
            to={"/categories"}
          >
            <li>
              <div className="idiv">
                <FontAwesomeIcon icon={faShapes} />
              </div>
              <h4>Categories</h4>
            </li>
          </NavLink>
          <NavLink
            className={(e) => {
              return e.isActive ? "active-color" : "fade-color";
            }}
            to={"/movies"}
          >
            <li>
              <div className="idiv">
                <FontAwesomeIcon icon={faClapperboard} />
              </div>
              <h4>Movies</h4>
            </li>
          </NavLink>
          <NavLink
            className={(e) => {
              return e.isActive ? "active-color" : "fade-color";
            }}
            to={"/watchlist"}
          >
            <li>
              <div className="idiv">
                <FontAwesomeIcon icon={faBookmark} />
              </div>
              <h4>Watchlist</h4>
            </li>
          </NavLink>
          <NavLink
            className={(e) => {
              return e.isActive ? "active-color" : "fade-color";
            }}
            to={"/account"}
          >
            <li>
              <div className="idiv">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <h4>Account</h4>
            </li>
          </NavLink>
        </ul>
      </div>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
    </div>
  );
}
