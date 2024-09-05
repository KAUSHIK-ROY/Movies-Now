import React from "react";
import "./promotion.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{ faPlay, faPlus, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import Movies from './Movies'

export default function Promotion() {
  return (
    <div className="trailer">
     <video className="background-video" autoPlay loop muted>
        <source src="D:\My download\SPIDER-MAN_ NO WAY HOME - Official Trailer (HD).mp4" type="video/mp4" />
      </video>
    <div className="movie-info" id="Home">
      <div className="headline">
        <h1>Welcome to Movies Now</h1>
        <p>Watch the letest movies, TV shows, web series</p>
      </div>
      <div className="promo-btn">
        <div className="promotion">
          <h2>
            MONEY <span> HEIST</span>
          </h2>
          <p>
            Eight thieves take hostages and lock themselves in the Royal Mint of
            Spain as a criminal mastermind manipulates the police to carry out
            his plan.
          </p>
          <h3>
            A Netflix original series | <span>Thriller</span> | 2021{" "}
          </h3>
          <h6 id="rate">
            <span>IMDb</span> <FontAwesomeIcon icon={faStarHalfStroke} /> 8.2/10
          </h6>
        </div>
        <div className="play-btn">
          <a
            href="img-vid/Money Heist _ Series Trailer _ Netflix.mp4"
            className="play"
          >
            <FontAwesomeIcon icon={faPlay} /> Watch now
          </a>
          <a href="#" className="watchlist">
          <FontAwesomeIcon icon={faPlus} />
          </a>
        </div>
      </div>
    </div>
    <Movies/>
    </div>
  );
}
