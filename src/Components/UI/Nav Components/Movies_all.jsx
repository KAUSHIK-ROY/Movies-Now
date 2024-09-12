import React, { useEffect } from 'react'
import SideNav from '../SideNav'
import './movies_all.css'
import useFetch from '../../../Hooks/useFetch'
import M_movies from '../Movies/M_movies';
import axios from 'axios';
import { setImageURL } from '../../../Redux/movieSlice';
import { useDispatch } from 'react-redux';

export default function Movies_all() {

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
  const { data: popularShowData } = useFetch("/discover/movie");

  return (
    <div className="movies-all">
      <SideNav/>
      <h1 className="component-name">Movies</h1>
      <M_movies data={popularShowData} heading={""} media_type={"movie"}/>
      </div>
  )
}
