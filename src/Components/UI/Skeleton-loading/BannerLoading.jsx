import React from "react";
import "./bannerLoading.css";
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

function BannerLoading() {
  return (
    <div className="bannerLoading">
      <div className="mylogo"></div>
      <div className="navbar"></div>
      <div className="posterLoading">
        <div className="detailsLoading">
          <div className="nameLoading"></div>
          <div className="detailLoading"></div>
          <div className="btnLoading">
            <div className="btn3"></div>
            <div className="btn4"></div>
          </div>
        </div>
      </div>
      <div className="topic1">
        <div className="topic"></div>
        <div className="cards-div">
        <div className="cardsLoading"></div>
        <div className="cardsLoading"></div>
        <div className="cardsLoading"></div>
      </div>
      </div>
      <div className="mobile-nav">
      <FontAwesomeIcon icon={faHouse} />
      <FontAwesomeIcon icon={faSearch} />
      <FontAwesomeIcon icon={faShapes} />
      <FontAwesomeIcon icon={faClapperboard} />
      <FontAwesomeIcon icon={faBookmark} />
      </div>
    </div>
  );
}

export default BannerLoading;
