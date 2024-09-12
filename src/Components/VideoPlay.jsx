import React from "react";
import './videoPlay.css'

export default function VideoPlay({ videoId }) {
  return (
    <div className="video-play">
      <iframe
        // src={`https://www.youtube.com/embed/${videoData?.results[0]?.key}`}        
        title="Movie Trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
