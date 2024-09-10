import React, { Suspense } from "react";
import "./movies.css";
const Cards = React.lazy(()=> import ("./Movies-Cards/Cards"));

export default function Movies({data=[],heading}) {
  
  return (
    <div className="movies">
      <div className="genre">
        <h2>{heading}</h2>
        <div className="all-cards">
          <Suspense fallback={<p>This is loading...</p>}>
          {data.map((data)=>{
            return (<Cards data={data}/>)
            })}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
