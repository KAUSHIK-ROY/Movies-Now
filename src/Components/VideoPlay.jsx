import React from "react";
import './videoPlay.css'
import useFetchDetails from "../Hooks/useFetchDetails";
import { useParams } from "react-router-dom";

export default function VideoPlay({data, media_type}) {
  const params = useParams()

  const { data : videoData } = useFetchDetails(`/${params?.detail || media_type}/${params?.id || data}/videos`)
  console.log("hii", media_type)

  return (
    <div className="video-play">
      <iframe
        src={`https://www.youtube.com/embed/${videoData?.results[0]?.key}`}    
        title="Movie Trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
