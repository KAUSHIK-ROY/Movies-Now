import React from "react";
import "./videoPlay.css";
import useFetchDetails from "../Hooks/useFetchDetails";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

export default function VideoPlay({close}) {
  const params = useParams();

  const { data: videoData } = useFetchDetails(
    `/${params?.detail || params?.type }/${params?.id}/videos`
  ); 
  // console.log("params", params)
  return (
    <div className="video-play">
      <button className="close-btn" onClick={close}><FontAwesomeIcon icon={faClose}/></button>
    
      <iframe
        src={`https://www.youtube.com/embed/${videoData?.results[1]?.key}`}
        title="Movie Trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
