import React from 'react'
import './cards.css'
import { useSelector } from 'react-redux';

export default function Cards({data}) {
  const imageURL = useSelector(state => state.moviesData.imageURL)
  return (
    <div className="cards">
      <div className="v-card">
        {
          data?.poster_path ?(<img src={imageURL+data?.poster_path}/>): 'not found'
        }
      </div>
      {/* <h1>{data?.title || data?.name}</h1> */}
    </div>
  )
}
