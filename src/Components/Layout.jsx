import React, { lazy, Suspense, useEffect, useState } from "react";
import "./layout.css";
import SideNav from "./UI/SideNav";
import useFetch from "../Hooks/useFetch";
import BannerLoading from "./UI/Skeleton-loading/BannerLoading";
import logo from "./logo-pics/logo.png";
const Promotion = lazy(() => import("./UI/Promotion"));
const Movies = lazy(() => import("./UI/Movies"));

export default function Layout() {
  const { data: popularShowData } = useFetch("/movie/popular");
  const { data: upcomingData } = useFetch("/movie/upcoming");
  const { data: top_ratedData } = useFetch("/tv/top_rated");
  const { data: now_playingData } = useFetch("/movie/now_playing");
  const { data: airing_todayData } = useFetch("/tv/airing_today");
  // const [loading, setLoading] = useState(true);
  // useEffect(()=>{
  //   const timer = setTimeout(()=>{
  //     setLoading(false)
  //   }, 1000);
  //   return ()=>clearTimeout(timer);
  // },[])
  // if (loading){
  //   return (<BannerLoading/>)
  // }
  
  return (
    <div className="layout">
      <Suspense fallback={<BannerLoading/>}>
      <div className="mobile-logo">
        <img src={logo} alt="" />
      </div>
        <Promotion />
        <SideNav />
        <div className="home-movies">
        <Movies data={popularShowData} heading={"Popular Movies"} media_type={"movie"} />
        <Movies data={upcomingData} heading={"Upcoming"} media_type={"movie"} />
        <Movies data={top_ratedData} heading={"Top Rated"} media_type={"tv"} />
        <Movies data={now_playingData} heading={"Now Playing"} media_type={"movie"} />
        <Movies data={airing_todayData} heading={"Airing Today"} media_type={"tv"} />
        </div>
      </Suspense>
    </div>
  );
}