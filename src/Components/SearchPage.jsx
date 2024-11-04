import React, { Suspense, useEffect, useState } from "react";
import "./searchPage.css";
import SideNav from "./UI/SideNav";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import M_cards from "./UI/Movies-Cards/M_cards";
import { useDispatch } from "react-redux";
import { setImageURL } from "../Redux/movieSlice";
import useFetch from "../Hooks/useFetch";
import Loading from "./UI/Skeleton-loading/Loading";
import M_movies from "./UI/Movies/M_movies";

export default function SearchPage() {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isSearching, setIsSearching] = useState(false);
  const [showNotFound, setShowNotFound] = useState(false);
  const [placeholder, setPlaceholder] = useState(
    "Search your fevourite movies and TV shows..."
  );
  const navigate = useNavigate();

  const query = location?.search?.slice(3);
  const fetchData = async () => {
    setIsSearching(true);
    setShowNotFound(false);
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
      if (response.data.results.length === 0) {
        setTimeout(() => {
          setShowNotFound(true);
        }, 1000);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

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
    if (query) {
      setPage(1);
      setData([]);
      fetchData();
    }
  }, [location?.search]);

  useEffect(() => {
    if (query) {
      fetchData();
    }
  }, [page]);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10) {
      setPage((preve) => preve + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { data: trendingData } = useFetch("/trending/all/week");

  const updatePlaceholder = () => {
    if (window.innerWidth < 481) {
      setPlaceholder("Search movies and TV shows");
    } else {
      setPlaceholder("Search your fevourite movies and TV shows...");
    }
  };

  useEffect(() => {
    updatePlaceholder();
    window.addEventListener("resize", updatePlaceholder);

    return () => window.removeEventListener("resize", updatePlaceholder);
  }, []);


  // console.log("data", data);

  return (
    <div className="search-page">
      <div className="search-div">
        <button>
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <input
          type="text"
          placeholder={placeholder}
          onChange={(e) => navigate(`/search?q=${e.target.value}`)}
          value={query?.split("%20")?.join(" ")}
        />
      </div>
      <div className="blank-div"></div>
      <SideNav />
      <Suspense fallback={<Loading />}>
        {isSearching ? (
          data.length != 0 ? (
            <M_movies
              data={data}
              heading={""}
              media_type={data.media_type}
              setPage={setPage}
            />
          ) : (
            showNotFound && (
              <h1 className="not-found">
                Oops! We couldn't find any results. Try again!
              </h1>
            )
          )
        ) : (
          <M_movies
            data={trendingData}
            heading={""}
            media_type={data.media_type}
            setPage={setPage}
          />
        )}
        {/* </div> */}
      </Suspense>
    </div>
  );
}
