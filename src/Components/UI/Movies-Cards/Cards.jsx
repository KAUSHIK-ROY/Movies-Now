import React from "react";
import "./cards.css";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Cards({ data, media_type, myVideo }) {
  const imageURL = useSelector((state) => state.moviesData.imageURL);
  const mediaType = data.media_type ?? media_type;
  return (
    <div className="cards">
      <div className="v-card">
        {data?.poster_path ? (
          <img src={imageURL + data?.poster_path} />
        ) : (
          "not found"
        )}
      </div>
      <div className="b-card">
        {data?.backdrop_path ? (
          <>
            <Link to={"/" + mediaType + "/" + data.id}>
              <img src={imageURL + data?.backdrop_path} />
              <Link to={`/${mediaType}/${data.id}/video`}>
                <button>
                  <FontAwesomeIcon icon={faPlay} />
                </button>
              </Link>
              <h1>{data?.title || data?.name}</h1>
              <p>
                {mediaType} | {data.original_language} |{" "}
                {data.release_date || data.first_air_date}
              </p>
              <p>{data?.overview}</p>
            </Link>
          </>
        ) : (
          "not found"
        )}
      </div>
    </div>
  );
}
