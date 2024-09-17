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

  // const removeSpace = location?.search?.slice(3)?.split("%20")?.join(" ")
  // const [searchInput, setSearchInput] = useState(removeSpace);

  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (searchInput) {
  //     navigate(`/search?q=${searchInput}`);
  //   }
  // }, [searchInput]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };
  return (
    <div className="nav">
      <div className="sideNav">
        <ul>
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
              Search
            </li>
          </NavLink>
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
              Home
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
              Categories
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
              Movies
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
              Watchlist
            </li>
          </NavLink>
          {/* <NavLink
            className={(e) => {
              return e.isActive ? "active-color" : "fade-color";
            }}
            to={"/about-us"}
          >
            <li>
              <div className="idiv">
                <FontAwesomeIcon icon={faCircleInfo} />
              </div>
              About Us
            </li>
          </NavLink> */}
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
              Account
            </li>
          </NavLink>
        </ul>
      </div>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      {/* <form className="search-bar" onClick={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          class="search-input"
          onChange={(e)=>setSearchInput(e.target.value)}  value={searchInput}
        />
        <button class="search-btn">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form> */}
    </div>
  );
}
