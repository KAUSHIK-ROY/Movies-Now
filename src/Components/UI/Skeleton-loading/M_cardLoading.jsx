import React, { useEffect, useState } from "react";
import "./m_cardLoading.css";

function M_cardLoading() {
  const [count, setCount] = useState(0);
  const cardArray = [];

  const updateCount = () => {
    if (window.innerWidth < 481) {
      setCount(5);
    } else {
      setCount(13);
    }
  };

  useEffect(() => {
    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);
  
  for (let i = 0; i < count; i++) {
    cardArray.push(<div className="divLoading"></div>);
  }


  return (
    <div className="m-moviesLoading">
      <div className="m-cardLoading">{cardArray}</div>
    </div>
  );
}

export default M_cardLoading;
