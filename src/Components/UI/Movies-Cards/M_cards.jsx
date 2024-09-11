import React from 'react'
import './m_cards.css'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

export default function M_cards({data}) {
  const imageURL = useSelector(state => state.moviesData.imageURL)

  return (
    <div className="m-cards">
      <div className="mv-card">
        {
          data?.poster_path ?(<img src={imageURL+data?.poster_path}/>): 'not found'
        }
      </div>
      <div className="mb-card">
      {
          data?.backdrop_path ?(<img src={imageURL+data?.backdrop_path}/>): 'not found'
        }
        <button ><FontAwesomeIcon icon={faPlay}/></button>
        <h1>{data?.title || data?.name}</h1>
        <p>
          {data.original_language} | {data.release_date || data.first_air_date}
        </p>
        <p>{data?.overview}</p>
      </div>
    </div>
  )
}
