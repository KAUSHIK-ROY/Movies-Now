import React from 'react'
import SideNav from '../SideNav'
import './watchlist.css'
import { useSelector } from 'react-redux'

export default function Watchlist() {

  const myWatchList  = useSelector((state)=> state.moviesData.Watchlist);
  console.log("movie",myWatchList)
  return (
    <div className="watchlist">
      <SideNav/>
      <h1>Watchlist</h1>
      <div className="w-list"></div>
    </div>
  )
}
