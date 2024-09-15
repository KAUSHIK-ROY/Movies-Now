import React, { useEffect, useState } from "react";
import "./promotion.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faPlay,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import useFetchLanguage from "../../Hooks/useFetchLanguage";
import useFetchGenres from "../../Hooks/useFetchGenres";
import useFetchCertifications from "../../Hooks/useFetchCertifications";

export default function Promotion() {
  const bannerData = useSelector((state) => state.moviesData.bannerData);
  const imageURL = useSelector((state) => state.moviesData.imageURL);
  const { getGenreNames } = useFetchGenres();
  const { getLanguageName } = useFetchLanguage();
  const { getCertificationName, loading: certLoading  } = useFetchCertifications();

  const [currentBanner, setCurrentBanner] = useState(0);
  const nextBanner = () => {
    if (currentBanner < bannerData.length - 1) {
      setCurrentBanner((preve) => preve + 1);
    }
  };
  const previousBanner = () => {
    if (currentBanner > 0) {
      setCurrentBanner((preve) => preve - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentBanner < bannerData.length - 1) {
        nextBanner();
      } else {
        setCurrentBanner(0);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [bannerData, imageURL, currentBanner]);

  // console.log("b data me", getCertificationName)

  return (
    <>
      <div className="promotion">
        {bannerData.map((data, index) => {
          return (
            <div className="details">
              <div
                className="banner"
                style={{
                  transform: `translateX(-${currentBanner * 100}%)`,
                  transition: "transform 0.5s ease-in-out",
                }}
              >
                <img src={imageURL + data.backdrop_path} />
                <Link to={"/" + data?.media_type + "/" + data.id}>
                  <div className="black">
                    <div className="banner-details">
                      <h1>
                        {data.name || data.title || data.original_title || data.original_name}
                      </h1>
                      <p className="bold">
                        {data.media_type} | {getLanguageName(data.original_language)} | {" "}
                         {/* {certLoading ? "Loading certifications..." : getCertificationName(data.media_type, "US", data.certification)} | */}
                        {moment(data.release_date || data.first_air_date).format('YYYY')}
                      </p>
                      <p>{data.overview}</p>
                      <p className="bold">{getGenreNames(data.genre_ids)}</p>
                      <div className="play-btn">
                        <Link to={`/${data?.media_type}/${data.id}/video`} data={data.id} media_type={data?.media_type}>
                          <div className="play">
                            <span>
                              <FontAwesomeIcon icon={faPlay} />
                            </span>
                            Watch Now
                          </div>
                        </Link>
                        <div className="w-list-btn">
                          <FontAwesomeIcon icon={faPlus} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
        <div className="next-banner">
          <button className="btn" onClick={previousBanner}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <div className="slide-banner">
            {bannerData.map((data, index) => {
              return (
                <div
                  className="mini-banner"
                  style={{
                    transform: `translateX(-${currentBanner * 9.4}vw)`,
                    transition: "transform 0.5s ease-in-out",
                  }}
                >
                  <img src={imageURL + data.backdrop_path} />
                </div>
              );
            })}
          </div>
          <button className="btn" onClick={nextBanner}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </>
  );
}
