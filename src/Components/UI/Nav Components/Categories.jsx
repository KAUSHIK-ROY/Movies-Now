import React from 'react'
import "./categories.css"
import SideNav from '../SideNav'
import Movies from '../Movies'
import useFetch from '../../../Hooks/useFetch'

export default function Categories() {

  // const {data : movieData} = ()=> useFetch("/discover/movie")
  return (
    <div className='categories'>
      <SideNav/>
      <h1>Categories</h1>
      {/* <Movies data={movieData} heading={"Movies"}/> */}
    </div>
  )
}
