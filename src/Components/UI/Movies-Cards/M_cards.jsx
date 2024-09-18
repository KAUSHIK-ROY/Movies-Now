import React from "react";
import "./m_cards.css";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import moment from "moment";
import useFetchLanguage from "../../../Hooks/useFetchLanguage";

export default function M_cards({ data, media_type }) {
  const imageURL = useSelector((state) => state.moviesData.imageURL);
  const mediaType = data.media_type ?? media_type;
  const { getLanguageName } = useFetchLanguage();

  return (
    <div className="m-cards">
      <div className="mv-card">
        {data?.poster_path ? (
          <img src={imageURL + data?.poster_path} alt=""/>
        ) : (
          `not found`
        )}
      </div>
      <div className="mb-card">
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
                {mediaType} | {getLanguageName(data.original_language)} | {moment(data.release_date || data.first_air_date).format('YYYY')}
              </p>
              <p>{data?.overview}</p>
            </Link>
          </>
        ) : (
          `not found`
        )}
      </div>
    </div>
  );
}
