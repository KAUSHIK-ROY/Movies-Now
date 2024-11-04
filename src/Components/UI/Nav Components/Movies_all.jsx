import React, { useEffect, useState } from "react";
import SideNav from "../SideNav";
import "./movies_all.css";
import useFetch from "../../../Hooks/useFetch";
import M_movies from "../Movies/M_movies";
import axios from "axios";
import { setImageURL } from "../../../Redux/movieSlice";
import { useDispatch } from "react-redux";

export default function Movies_all() {
  const [page, setPage] = useState(1);
  const [popularShowData, setPopularShowData] = useState([]); 
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
  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`/discover/movie?&page=${page}`);
        setPopularShowData((prev) => { 
          return [...prev, ...response.data.results]; // Updated variable name
        }); // Set the fetched data
      } catch (error) {
        console.log("Error fetching movies", error);
      }
    };
    fetchMovies();
  }, [page]); 

  // const { data: popularShowData } = useFetch(`/discover/movie?&page=${page}`);

  

  return (
    <div className="movies-all">
      <SideNav />
      <h1 className="component-name">Movies</h1>
      <M_movies
        data={popularShowData}
        heading={""}
        media_type={"movie"}
        setPage={setPage}
      />
    </div>
  );
}
