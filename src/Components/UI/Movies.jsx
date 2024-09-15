import React, { Suspense, useRef } from "react";
import "./movies.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
const Cards = React.lazy(()=> import ("./Movies-Cards/Cards"));

export default function Movies({data=[],heading,media_type,myVideo}) {

  const scrollRef = useRef(null);

  const slideLeft = () => {
    scrollRef.current.scrollBy({ left: -700, behavior: "smooth" });
  };

  const slideRight = () => {
    scrollRef.current.scrollBy({ left: 700, behavior: "smooth" });
  };

  
  return (
    <div className="movies">
      <div className="genre">
        <h2>{heading}</h2>
        <div className="all-cards" ref={scrollRef}>
          <Suspense fallback={<p>This is loading...</p>}>
          {data.map((data)=>{
            return (<Cards data={data} media_type={media_type} myVideo={myVideo} />)
            })}
          </Suspense>
        </div>
            <button className="btn1 right" onClick={slideRight}><FontAwesomeIcon icon={faChevronRight}/></button>
            <button className="btn1 left" onClick={slideLeft}><FontAwesomeIcon icon={faChevronLeft}/></button>
      </div>
    </div>
  );
}
