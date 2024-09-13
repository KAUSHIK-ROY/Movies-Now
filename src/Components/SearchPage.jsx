import React from 'react'
import './searchPage.css'
import SideNav from './UI/SideNav'
import M_movies from './UI/Movies/M_movies'
import useFetch from '../Hooks/useFetch';

export default function SearchPage() {
  const { data: searchData } = useFetch("/search/keyword");

  return (
    <div className="search-page">
      <h1 className='component-name'>Search Your Movies and TV shows</h1>
      <SideNav/>
      <M_movies data={searchData} heading={""} media_type={"movie"} />

    </div>
  )
}
