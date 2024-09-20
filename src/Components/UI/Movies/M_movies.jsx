import React, { Suspense, useEffect, useState } from "react";
import "./m_movies.css";
import Loading from "../Loading";
const M_cards = React.lazy(() => import("../Movies-Cards/M_cards"));

export default function M_movies({ data, media_type }) {
  const [dataFound, setDataFound] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); 

    // Simulate an API call delay or data fetching delay
    const timer = setTimeout(() => {
      if (!data || data.length === 0) {
        setDataFound(false);
      } else {
        setDataFound(true);
      }
      setLoading(false); // Set loading false after the check
    }, 1000); 

    return () => clearTimeout(timer); 
  }, [data]);

  if (loading) {
    // Show loading initially
    return <Loading />;
  }

  return (
    <div className="m-movies">
        {dataFound ? (
          data.map((item) => {
            return <M_cards key={item.id} data={item} media_type={media_type} />;
          })
        ) : (
          <h1 className="not-found">
            Oops! We couldn't find any results. Try exploring other genres!
          </h1>
        )}
    </div>
  );
}
