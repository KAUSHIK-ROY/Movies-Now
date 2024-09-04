import React from "react";
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

export default function SideNav() {
  return (
    <div className="nav">
      <div className="sideNav">
        <ul>
          <li>
            <div className="idiv">
              <FontAwesomeIcon icon={faHouse} />
            </div>
            Home
          </li>
          <li>
            <div className="idiv">
              <FontAwesomeIcon icon={faShapes} />
            </div>
            Categories
          </li>
          <li>
            <div className="idiv">
              <FontAwesomeIcon icon={faClapperboard} />
            </div>
            Movies
          </li>
          <li>
            <div className="idiv">
              <FontAwesomeIcon icon={faBookmark} />
            </div>
            Watchlist
          </li>
          <li>
            <div className="idiv">
              <FontAwesomeIcon icon={faCircleInfo} />
            </div>
            About Us
          </li>
          <li>
            <div className="idiv">
              <FontAwesomeIcon icon={faUser} />
            </div>
            Account
          </li>
        </ul>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." class="search-input" />
        <button class="search-btn">
              <FontAwesomeIcon icon={faSearch} /></button>
      </div>
    </div>
  );
}
