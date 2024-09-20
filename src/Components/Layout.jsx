import React, { lazy, Suspense, useState } from "react";
import "./layout.css";
import SideNav from "./UI/SideNav";
import useFetch from "../Hooks/useFetch";
import Loading from './UI/Loading'
const Promotion = lazy(() => import("./UI/Promotion"));
const Movies = lazy(() => import("./UI/Movies"));

export default function Layout() {
  const { data: popularShowData } = useFetch("/movie/popular");
  const { data: upcomingData } = useFetch("/movie/upcoming");
  const { data: top_ratedData } = useFetch("/tv/top_rated");
  const { data: now_playingData } = useFetch("/movie/now_playing");
  const { data: airing_todayData } = useFetch("/tv/airing_today");
  
  return (
    <div className="layout">
      <Suspense fallback={<Loading/>}>
        <Promotion />
        <SideNav />
        <Movies data={popularShowData} heading={"Popular Movies"} media_type={"movie"} />
        <Movies data={upcomingData} heading={"Upcoming"} media_type={"movie"} />
        <Movies data={top_ratedData} heading={"Top Rated"} media_type={"tv"} />
        <Movies data={now_playingData} heading={"Now Playing"} media_type={"movie"} />
        <Movies data={airing_todayData} heading={"Airing Today"} media_type={"tv"} />
      </Suspense>
    </div>
  );
}