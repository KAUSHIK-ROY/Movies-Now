import React, { useEffect, useState } from 'react'
import "./genrePage.css"
import SideNav from './UI/SideNav'
import { useParams } from 'react-router-dom'
import M_movies from './UI/Movies/M_movies'
import useFetch from '../Hooks/useFetch'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setImageURL } from '../Redux/movieSlice'

export default function GenrePage() {
  const [allMovies, setAllMovies] = useState(true)
  const handleTvMovies = ()=>{
    setAllMovies(!allMovies)
  }
  const params = useParams()
  const dispatch = useDispatch()
  const fetchConfiguration = async()=>{
    try{
      const response = await axios.get("/configuration")
      dispatch(setImageURL(response.data.images.secure_base_url+"original"))
    } catch(error){
      console.log("Error", error)
    }
  }
  useEffect(()=>{
    fetchConfiguration()
  },[])

  const { data : movieGenreData} = useFetch(`/discover/movie?with_genres=${params?.id}`)
  const { data : tvGenreData} = useFetch(`/discover/tv?with_genres=${params?.id}`)

  console.log("name", params)
  return (
    <div className="genrePage">
      <SideNav/>
      <h1 className='genre-h1'>{params?.genre}</h1>
      <div className="toggle-switch">
      <span className={`switch-label ${allMovies ? "active" : ""}`}>Movies</span>
      <label className="switch">
        <input type="checkbox" checked={!allMovies} onChange={handleTvMovies} />
        <span className="slider"></span>
      </label>
      <span className={`switch-label ${!allMovies ? "active" : ""}`}>TV Shows</span>
    </div>
      { allMovies ?
      (<M_movies data={movieGenreData} heading={""} media_type={"movie"}/>)
      :
      (<M_movies data={tvGenreData} heading={""} media_type={"tv"}/>)
}

    </div>
  )
}
