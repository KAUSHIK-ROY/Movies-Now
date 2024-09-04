import React from "react";
import "./promotion.css";

export default function Promotion() {
  return (
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
            <span>IMDb</span> <i class="bi bi-star-half"></i> 8.2/10
          </h6>
        </div>
        <div className="play-btn">
          <a
            href="img-vid/Money Heist _ Series Trailer _ Netflix.mp4"
            className="play"
          >
            <i className="bi bi-play-fill"></i> Watch now
          </a>
          <a href="#" className="watchlist">
            <i className="bi bi-plus-lg"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
