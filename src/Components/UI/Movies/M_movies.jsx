import React from 'react'
import './m_movies.css'
import M_cards from '../Movies-Cards/M_cards'

export default function M_movies({data, media_type}) {
  return (
    <div className='m-movies'>
        {data.map((data)=>{
            return (<M_cards data={data} media_type={media_type}/>)
            })}
    </div>
  )
}
