import React from 'react'
import "./categories.css"
import SideNav from '../SideNav'
import useFetchGenres from '../../../Hooks/useFetchGenres'
import { Link } from 'react-router-dom'

export default function Categories() {

  const {genres} = useFetchGenres()
  // console.log("genre", genres)
  return (
    <div className='categories'>
      <SideNav/>
      <h1>Categories</h1>
      <div className="genre-div">
        {
          genres.map((data)=>{
            return (
              <Link to={`/category/${data.name}/${data.id}`}>
            <button className='genre-btn'>{data.name}</button>
              </Link>
          )
          })
        }
      </div>
    </div>
  )
}
