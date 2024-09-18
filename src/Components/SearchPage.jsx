import React, { useEffect, useState } from "react";
import "./searchPage.css";
import SideNav from "./UI/SideNav";
import M_movies from "./UI/Movies/M_movies";
import useFetch from "../Hooks/useFetch";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import M_cards from "./UI/Movies-Cards/M_cards";
import { useDispatch } from "react-redux";
import { setImageURL } from "../Redux/movieSlice";

export default function SearchPage() {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const query = location?.search?.slice(3);
  const fetchData = async () => {
    try {
      const response = await axios.get(`search/multi`, {
        params: {
          query: location?.search?.slice(3),
          page: page,
        },
      });
      setData((preve) => {
        return [...preve, ...response.data.results];
      });
    } catch (error) {
      console.log("error", error);
    }
  };
  
  const dispatch = useDispatch()
  const fetchConfiguration = async()=>{
    try{
      const response = await axios.get("/configuration")
      dispatch(setImageURL(response.data.images.secure_base_url+"original"))
    } catch(error){
      console.log("Error", error)
    }
  }
  useEffect(()=>{
    fetchConfiguration()
  },[])
  
  useEffect(() => {
    if (query) {
      setPage(1);
      setData([]);
      fetchData();
    }
  }, [query,page]);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPage((preve) => preve + 1);
    }
  };
  
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  
  // console.log("data",data)
  

  return (
    <div className="search-page">
      <div className="search-div">
        <button>
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <input
          type="text"
          placeholder="Search your fevourite movies and TV shows..."
          onChange={(e) => navigate(`/search?q=${e.target.value}`)}
          value={query?.split("%20")?.join(" ")}
        />
      </div>
      <SideNav />
      <div className='s-movies'>
        {data.map((searchData, index)=>{
            return (<M_cards data={searchData} key={index} media_type={searchData.media_type}/>)
            })}
            </div>
    </div>
  );
}
