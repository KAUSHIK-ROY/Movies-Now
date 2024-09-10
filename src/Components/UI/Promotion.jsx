import React, { useEffect, useState } from "react";
import "./promotion.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faPlay,
  faPlus
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

export default function Promotion() {
  const bannerData = useSelector((state) => state.moviesData.bannerData);
  const imageURL = useSelector((state) => state.moviesData.imageURL);
  const genre = useSelector((state )=>state.moviesData.genre);
  // console.log("imageUrl",bannerData);
  // console.log("genre", genre)

  // const movieGenre = ()=>{
  //   if()
  // }

  const [currentBanner , setCurrentBanner] = useState(0)
  const nextBanner = ()=>{
    if (currentBanner < bannerData.length - 1) {
      setCurrentBanner(prev => prev + 1);
    }
  }
  const previousBanner = ()=>{
    if (currentBanner > 0) {
      setCurrentBanner(prev => prev - 1);
    }
  }
  const handleChange = (index)=>{
    // console.log("index of", imageURL + bannerData[5].backdrop_path)
    // console.log("index data", bannerData[index])
    // console.log("index is", index)
  }

  useEffect(()=>{
    const interval = setInterval (()=>{
      if (currentBanner < bannerData.length - 1) {
      nextBanner()
    } else {
      setCurrentBanner(0)
    }},12000)
    return ()=>clearInterval(interval)
  },[bannerData,imageURL])

  return (
    <>
      <div className="promotion">
        {bannerData.map((data, index) => {
          return (
            <div className="details">
              <div className="banner"  style={{
            transform: `translateX(-${currentBanner * 100}%)`,
            transition: "transform 0.5s ease-in-out"
          }}>
                <img src={imageURL + data.backdrop_path} />
                <div className="black">
                  <div className="banner-details">
                    <h1>
                      {data.name || data.original_title || data.original_name}
                    </h1>
                    <p className="type-date">
                      {data.media_type} | {data.original_language} | {data.release_date || data.first_air_date}
                    </p>
                    <p>{data.overview}</p>
                    <p>{data.genre_ids}</p>
                    <div className="play-btn">
                      <div className="play">
                        <span>
                          <FontAwesomeIcon icon={faPlay} />
                        </span>
                        Watch now
                      </div>
                      <div className="w-list-btn">
                        <FontAwesomeIcon icon={faPlus} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="next-banner">
        <button className="btn" onClick={previousBanner}><FontAwesomeIcon icon={faChevronLeft} /></button>
          <div className="slide-banner">
          {bannerData.map((data, index) => {
          return (<div className="mini-banner" style={{
            transform: `translateX(-${currentBanner * 9.4}vw)`,
            transition: "transform 0.5s ease-in-out"
          }}><img src={imageURL + data.backdrop_path} onClick={()=>{handleChange(index)}}/></div>)})}
          </div>
            <button className="btn" onClick={nextBanner}><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
      </div>
    </>
  );
}
