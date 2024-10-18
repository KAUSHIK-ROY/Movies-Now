import React, { lazy, Suspense, useEffect, useState } from "react";
import "./genrePage.css";
import SideNav from "./UI/SideNav";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setImageURL } from "../Redux/movieSlice";
import M_cardLoading from "./UI/Skeleton-loading/M_cardLoading";
const M_movies = React.lazy(() => import("./UI/Movies/M_movies"));

export default function GenrePage() {
  const [allMovies, setAllMovies] = useState(true);
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleTvMovies = () => {
    setAllMovies(!allMovies);
    setPage(1);
    setMovies([]);
    setLoading(true);
  };
  const params = useParams();
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

  const fetchMovies = async () => {
    try {
      const mediaType = allMovies ? "movie" : "tv";
      const response = await axios.get(
        `/discover/${mediaType}?with_genres=${params?.id}&page=${page}`
      );
      setMovies((prevMovies) => [...prevMovies, ...response.data.results]);
      setLoading(false);
    } catch (error) {
      console.log("Error", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    setPage(1);
    setMovies([]);
    fetchMovies();
  }, [params?.id, allMovies]);

  useEffect(() => {
    fetchMovies();
  }, [page, allMovies, params?.id]);

  return (
    <div className="genrePage">
      <SideNav />
      <h1 className="genre-h1">{params?.genre}</h1>
      <div className="toggle-switch">
        <span className={`switch-label ${allMovies ? "active" : ""}`}>
          Movies
        </span>
        <label className="switch">
          <input
            type="checkbox"
            checked={!allMovies}
            onChange={handleTvMovies}
          />
          <span className="slider"></span>
        </label>
        <span className={`switch-label ${!allMovies ? "active" : ""}`}>
          TV Shows
        </span>
      </div>
      {loading ? (
        <M_cardLoading />
      ) : (
        <Suspense fallback={<M_cardLoading />}>
          <M_movies
            data={movies}
            heading={""}
            media_type={allMovies ? "movie" : "tv"}
            setPage={setPage}
          />
        </Suspense>
      )}
    </div>
  );
}
