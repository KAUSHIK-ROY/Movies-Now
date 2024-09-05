import React from "react";
import "./movies.css";
import Cards from "./Movies-Cards/Cards";

export default function Movies() {
  return (
    <div className="movies">
      <div className="genre">
        <h2>Popular shows</h2>
        <div className="all-cards">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    </div>
  );
}
