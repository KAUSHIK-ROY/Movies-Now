import React, { Suspense, useEffect, useRef, useState } from "react";
import "./m_movies.css";
import Loading from "../Loading";
const M_cards = React.lazy(() => import("../Movies-Cards/M_cards"));

export default function M_movies({ data, media_type }) {
  const [dataFound, setDataFound] = useState(true);
  const [loading, setLoading] = useState(true);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      setLoading(true);
    }
    const timer = setTimeout(() => {
      if (!data || data.length === 0) {
        setDataFound(false);
      } else {
        setDataFound(true);
      }
      if (isFirstRender.current) {
        setLoading(false); // Hide the spinner after first data load
        isFirstRender.current = false; // Mark first render as done
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [data]);

  if (loading) {
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
