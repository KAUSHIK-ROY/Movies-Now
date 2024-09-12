import React from 'react'
import "./categories.css"
import SideNav from '../SideNav'
// import Movies from '../Movies'
// import useFetch from '../../../Hooks/useFetch'

export default function Categories() {

  const myGenres = ["Action","Adventure" ,"Animation" ,"Comedy" ,"Crime" ,"Documentary" ,"Drama" ,"Family" ,"Fantasy" ,"History" ,"Horror" ,"Music" ,"Mystery" ,"Romance" ,"Science Fiction" ,"TV Movie" ,"Thriller" ,"War" ,"Western"]

  return (
    <div className='categories'>
      <SideNav/>
      <h1>Categories</h1>
      <div className="genre-div">
        {
          myGenres.map((e)=>{
            return <button className='genre-btn'>{e}</button>
          })
        }
      </div>
    </div>
  )
}
