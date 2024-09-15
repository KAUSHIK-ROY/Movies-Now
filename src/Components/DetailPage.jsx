import React, { lazy, useEffect, useState } from "react";
import "./detailPage.css";
import SideNav from "./UI/SideNav";
import Movies from "./UI/Movies";
import { Link, useParams } from "react-router-dom";
import useFetchDetails from "../Hooks/useFetchDetails";
import { useDispatch, useSelector } from "react-redux";
import { setImageURL } from "../Redux/movieSlice";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPlus } from "@fortawesome/free-solid-svg-icons";
import moment from 'moment'
import useFetchLanguages from "../Hooks/useFetchLanguage";
import VideoPlay from "./VideoPlay";

export default function DetailPage() {
  const params = useParams();
  const data = useFetchDetails(`/${params?.detail}/${params?.id}`);
  const imageURL = useSelector((state) => state.moviesData.imageURL);
  const { getLanguageName } = useFetchLanguages()
  
  const dispatch = useDispatch();
  const fetchConfiguration = async () => {
    try {
      const response = await axios.get("/configuration");
      dispatch(setImageURL(response.data.images.secure_base_url + "original"));
    } catch (error) {
      console.log("Error", error);
    }
  };
  useEffect(() => {
    fetchConfiguration();
  }, []);
  
  const totalMinutes = data.data?.runtime || 0;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = Math.floor(totalMinutes % 60);
  const formattedDuration = `${hours}h ${minutes}m`;



  const [playVideo,setPlayVideo] = useState(false)
  const [playVideoId,setPlayVideoId] = useState("")
  const handlePlayVideo = (data)=>{
    setPlayVideoId(data)
    setPlayVideo(true)

  }
  
  // console.log("img data", data.data);
  
  return (
    <div className="detail-page">
      <SideNav />
      <div className="trailer">
        <img src={imageURL + data.data?.backdrop_path} />
      </div>
      <div className="black-div">
        <div className="trailer-details">
          <h1>
            {
            data.data?.title ||
            data.data?.name ||
            data.data?.original_title ||
            data.data?.original_name}
          </h1>
          <p className="bold">
            {params?.detail} <span> | </span> {getLanguageName(data.data?.original_language)} <span> | </span> {params?.detail == "tv" ? '' : (formattedDuration)} <span> | </span> 
            {moment(data.data?.release_date || data.data?.first_air_date).format('MMMM Do YYYY')}
          </p>
          <p>{data.data?.overview}</p>
          <p className="bold">{data.data?.genres.map((genre) => genre.name).join(" | ")}</p>

          <div className="play-btn1">
          {/* <Link to={`/${params?.detail}/${params?.id}/video`} > */}
            <div className="play1" onClick={()=>handlePlayVideo(data)}>
              <span>
                <FontAwesomeIcon icon={faPlay} />
              </span>
              Watch Now
            </div>
          {/* </Link> */}
            <div className="w-list-btn1">
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </div>
        </div>
      </div>





      {
            playVideo && (
              <VideoPlay data={params?.id} close={()=>setPlayVideo(false)} media_type={params?.detail}/>
            )
          }



    </div>
  );
}
