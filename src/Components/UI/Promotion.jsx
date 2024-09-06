import React from "react";
import "./promotion.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPlus,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import Movies from "./Movies";
import { useSelector } from "react-redux";

export default function Promotion() {
  const bannerData = useSelector((state) => state.moviesData.bannerData);
  const imageURL = useSelector((state) => state.moviesData.imageURL);
  console.log("imageUrl", bannerData);

  return (
    <>
      <div className="promotion">
        {bannerData.map((data, index) => {
          return (
            <div className="details">
              <div className="banner">
                <img src={imageURL + data.backdrop_path} />
              </div>
              <div className="banner-details">
                <h1>{data.name || data.original_title || data.original_name}</h1>
                <p>{data.media_type} | {data.release_date}</p>
                <p>{data.overview}</p>
                <p>{data.genre_ids}</p>
                <div className="play-btn">
                  <div className="play">
                    <span><FontAwesomeIcon icon={faPlay}/></span>Watch now
                  </div>
                  <div className="watchlist">
                    <FontAwesomeIcon icon={faPlus} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
