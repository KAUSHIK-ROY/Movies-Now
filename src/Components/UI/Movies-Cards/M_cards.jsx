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

  if (mediaType === "person") {
    return null;
  }
  if (!data?.poster_path && !data?.backdrop_path) {
    return null;
  }

  // console.log(data)

  return (
    <Link to={"/" + mediaType + "/" + data.id}>
      <div className="m-cards">
        <div className="mv-card">
          {data?.poster_path || data?.backdrop_path ? (
            <img
              src={
                data?.poster_path
                  ? imageURL + data?.poster_path
                  : imageURL + data?.backdrop_path
              }
              alt=""
            />
          ) : (
            `not found`
          )}
        </div>
        <div className="mb-card">
          {data?.backdrop_path || data?.poster_path ? (
            <>
              <img
                src={
                  data?.backdrop_path
                    ? imageURL + data.backdrop_path
                    : imageURL + data?.poster_path
                }
                alt=""
              />
              <Link to={`/${mediaType}/${data.id}/video`}>
                <button>
                  <FontAwesomeIcon icon={faPlay} />
                </button>
              </Link>
              <h1>{data?.title || data?.name}</h1>
              <p>
                {mediaType} | {getLanguageName(data.original_language)} |{" "}
                {moment(data.release_date || data.first_air_date).format(
                  "YYYY"
                )}
              </p>
              <p>{data?.overview}</p>
            </>
          ) : (
            `not found`
          )}
        </div>
      </div>
    </Link>
  );
}
