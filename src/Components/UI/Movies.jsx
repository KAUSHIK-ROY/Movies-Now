import React from "react";
import "./movies.css";
import Cards from "./Movies-Cards/Cards";

export default function Movies({data=[],heading}) {
  
  return (
    <div className="movies">
      <div className="genre">
        <h2>{heading}</h2>
        <div className="all-cards">
          {data.map((data)=>{
            return (<Cards data={data}/>)
            })}
        </div>
      </div>
    </div>
  );
}
