import React, { Suspense, useEffect, useRef, useState } from "react";
import "./m_movies.css";
import M_cardLoading from "../Skeleton-loading/M_cardLoading";

const M_cards = React.lazy(() => import("../Movies-Cards/M_cards"));

export default function M_movies({ data, media_type, setPage }) {
  const [dataFound, setDataFound] = useState(true);
  const [loading, setLoading] = useState(true);
  const isFirstRender = useRef(true);

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setLoading(false);
      setDataFound(data && data.length > 0 );
      isFirstRender.current = false;

    },1000);
    return () => clearTimeout(timer); 
  }, [data]);


  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPage((preve) => preve + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (loading) {
    return <M_cardLoading />;
  }

  return (
    <div className="m-movies">
      {dataFound ? (
        data.map((item) => {
          return <M_cards key={item.id} data={item} media_type={media_type} />;
        })
      ) : (
        <h1 className="not-found">
          Oops! We couldn't find any results. Try again!
        </h1>
      )}
    </div>
  );
}
