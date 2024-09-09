import React from 'react'
import "./layout.css"
import Promotion from './UI/Promotion';
import SideNav from "./UI/SideNav";
import Movies from './UI/Movies'
import useFetch from '../Hooks/useFetch';

export default function Layout() {

  const {data : popularShowData}=useFetch('/movie/popular')
  const {data : upcomingData}=useFetch('movie/upcoming')
  const {data : top_ratedData}=useFetch('/tv/top_rated')
  const {data : now_playingData}=useFetch('/movie/now_playing')
  const {data : airing_todayData}=useFetch('/tv/airing_today')
  // const {data : Data}=useFetch('')
  return (
    <div className='layout'>
        <Promotion/>
        <SideNav/>
        <Movies data={popularShowData} heading={"Popular Movies"}/>
        <Movies data={upcomingData} heading={"Upcoming"}/>
        <Movies data={top_ratedData} heading={"Top Rated"}/>
        <Movies data={now_playingData} heading={"Now Playing"}/>
        <Movies data={airing_todayData} heading={"Airing Today"}/>

    </div>
  )
}  