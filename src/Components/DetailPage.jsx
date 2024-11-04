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
import moment from "moment";
import useFetchLanguages from "../Hooks/useFetchLanguage";
import useFetch from "../Hooks/useFetch";
import BackBtn from "./UI/BackBtn";

export default function DetailPage() {

  const [mobile, setMobile]= useState(false)
  const params = useParams();
  const data = useFetchDetails(`/${params?.detail}/${params?.id}`);
  const imageURL = useSelector((state) => state.moviesData.imageURL);
  const { data: similarData } = useFetch(
    `/${params?.detail}/${params?.id}/similar`
  );
  const { data: recommendedData } = useFetch(
    `/${params?.detail}/${params?.id}/recommendations`
  );

  const { getLanguageName } = useFetchLanguages();

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params.id]);

  const totalMinutes = data.data?.runtime || 0;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = Math.floor(totalMinutes % 60);
  const formattedDuration = `${hours}h ${minutes}m`;

  const [list, setList] = useState([]);
  const addList = (type, id) => {
    setList((preveMovies) => [...preveMovies, { type, id }]);
  };
  // console.log("list", imageURL + data.data?.poster_path);

  useEffect(()=>{
    const handleSize = ()=>{
      setMobile(window.innerWidth < 481);
    }
    handleSize()
    window.addEventListener('resize', handleSize)

    return ()=>{
      window.removeEventListener('resize',handleSize)
    }
  },[])
 
  return (
    <div className="detail-page">
      {mobile ? 
      (<BackBtn/>) : (<SideNav />)}
      <div className="trailer">
        <img src={data.data?.backdrop_path ? imageURL + data.data?.backdrop_path : imageURL + data.data?.poster_path} />
      </div>
      <div className="black-div">
        <div className="trailer-details">
          <h1>
            {data.data?.title ||
              data.data?.name ||
              data.data?.original_title ||
              data.data?.original_name}
          </h1>
          <p className="bold">
            {params?.detail == "tv" ? "TV Show" : "Movie"} <span> | </span>{" "}
            {getLanguageName(data.data?.original_language)} <span> | </span>{" "}
            {params?.detail == "tv" ? "" : formattedDuration} 
            {params?.detail !== "tv" && <span> | </span>}
            {moment(
              data.data?.release_date || data.data?.first_air_date
            ).format("MMMM Do YYYY")}
          </p>
          <p>{data.data?.overview}</p>
          <p className="bold">
            {data.data?.genres.map((genre) => genre.name).join(" • ")}
          </p>

          <div className="play-btn1">
            <Link to={`/${params?.detail}/${params?.id}/video`} >
            <div className="play1" >
              <span>
                <FontAwesomeIcon icon={faPlay} />
              </span>
              Watch Now
            </div>
            </Link>
            <div
              className="w-list-btn1"
              onClick={() => addList(params?.detail, params?.id)}
            >
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </div>
        </div>
      </div>
      {similarData.length != 0 && (
        <Movies
          data={similarData}
          heading={`Similar ${params?.detail == "tv" ? "TV Shows" : "Movies"}`}
          media_type={params?.detail}
        />
      )}
      {recommendedData.length != 0 && (
        <Movies
          data={recommendedData}
          heading={"Recommendations"}
          media_type={params?.detail}
        />
      )}

    </div>
  );
}
