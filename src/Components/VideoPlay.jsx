import React from "react";
import "./videoPlay.css";
import useFetchDetails from "../Hooks/useFetchDetails";
import { useParams } from "react-router-dom";
// import BackBtn from "./UI/BackBtn";

export default function VideoPlay() {
  const params = useParams();

  const { data: videoData } = useFetchDetails(
    `/${params?.detail || params?.type }/${params?.id}/videos`
  ); 
  // console.log("params", params)
  return (
    <div className="video-play">  
      <iframe
        src={`https://www.youtube.com/embed/${videoData?.results[1]?.key || videoData?.results[0]?.key}?autoplay=1&controls=1`}
        title="Movie Trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
