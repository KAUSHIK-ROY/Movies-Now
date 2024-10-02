import React, { useEffect, useState } from "react";
import "./cards.css";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import moment from "moment";
import useFetchLanguage from "../../../Hooks/useFetchLanguage";
import Loading from "../Skeleton-loading/Loading";

export default function Cards({ data, media_type }) {
  const [loading, setLoading] = useState(true);
  const imageURL = useSelector((state) => state.moviesData.imageURL);
  const mediaType = data.media_type ?? media_type;
  const { getLanguageName } = useFetchLanguage();

  useEffect(() => {
    if (data) {
      setLoading(false);
    }
  }, [data]);

  if (!data?.poster_path && !data?.backdrop_path) {
    return null;
  }

  return loading ? (
    <Loading />
  ) : (
    <div className="cards">
      <Link to={"/" + mediaType + "/" + data.id}>
      <div className="v-card">
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
          "not found"
        )}
      </div>
      <div className="b-card">
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
              {moment(data.release_date || data.first_air_date).format("YYYY")}
            </p>
            <p>{data?.overview}</p>
          </>
        ) : (
          "Not found"
        )}
      </div>
    </Link>
    </div>
  );
}
