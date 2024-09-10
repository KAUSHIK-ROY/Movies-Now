import React, { lazy, Suspense } from "react";
import "./layout.css";
import SideNav from "./UI/SideNav";
import useFetch from "../Hooks/useFetch";
const Promotion = lazy(() => import("./UI/Promotion"));
const Movies = lazy(() => import("./UI/Movies"));

export default function Layout() {
  const { data: popularShowData } = useFetch("/movie/popular");
  const { data: upcomingData } = useFetch("movie/upcoming");
  const { data: top_ratedData } = useFetch("/tv/top_rated");
  const { data: now_playingData } = useFetch("/movie/now_playing");
  const { data: airing_todayData } = useFetch("/tv/airing_today");
  // const {data : Data}=useFetch('')
  return (
    <div className="layout">
      <Suspense fallback={<p>This is loading...</p>}>
        <Promotion />
        <SideNav />
        <Movies data={popularShowData} heading={"Popular Movies"} />
        <Movies data={upcomingData} heading={"Upcoming"} />
        <Movies data={top_ratedData} heading={"Top Rated"} />
        <Movies data={now_playingData} heading={"Now Playing"} />
        <Movies data={airing_todayData} heading={"Airing Today"} />
      </Suspense>
    </div>
  );
}
