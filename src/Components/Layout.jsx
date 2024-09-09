import React from 'react'
import "./layout.css"
import Promotion from './UI/Promotion';
import SideNav from "./UI/SideNav";
import Movies from './UI/Movies'
import useFetch from '../Hooks/useFetch';

export default function Layout() {

  const {data : popularShow}=useFetch('/movie/popular')
  const {data : upcoming}=useFetch('movie/upcoming')
  return (
    <div className='layout'>
        <Promotion/>
        <SideNav/>
        <Movies data={popularShow} heading={"Popular Movies"}/>
        <Movies data={upcoming} heading={"Upcoming"}/>

    </div>
  )
}
