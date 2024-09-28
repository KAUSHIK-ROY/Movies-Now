import React from "react";
import "./m_cardLoading.css";

function M_cardLoading() {
    const cardArray = [];
    for (let i = 0; i < 13; i++) {
      cardArray.push(
      <div className="divLoading"></div>
      )
    }

  return (
    <div className="m-moviesLoading">
      <div className="m-cardLoading">{cardArray}</div>
    </div>
  );
}

export default M_cardLoading;
