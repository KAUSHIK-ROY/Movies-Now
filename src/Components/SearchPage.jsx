import React, { useEffect, useState } from 'react'
import './searchPage.css'
import SideNav from './UI/SideNav'
import M_movies from './UI/Movies/M_movies'
import useFetch from '../Hooks/useFetch';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function SearchPage() {
  const location = useLocation()
  const [data,setData] = useState([])
  const [page,setPage] = useState(1)
  const navigate = useNavigate()

  const query = location?.search?.slice(3)
  const fetchData = async()=>{
    try {
        const response = await axios.get(`search/multi`,{
          params : {
            query :location?.search?.slice(3),
            page : page
          }
        })
        setData((preve)=>{
          return[
              ...preve,
              ...response.data.results
          ]
        })
    } catch (error) {
        console.log('error',error)
    }
  }

  useEffect(()=>{
    if(query){
      setPage(1)
      setData([])
      fetchData()
    }
  },[location?.search])

  const handleScroll = ()=>{
    if((window.innerHeight + window.scrollY ) >= document.body.offsetHeight){
      setPage(preve => preve + 1)
    }
  }

  useEffect(()=>{
    if(query){
      fetchData()
    }
  },[page])

  useEffect(()=>{
    window.addEventListener('scroll',handleScroll)
},[])


  return (
    <div className="search-page">
      <div className="search-div">
      <input 
              type='text'
              placeholder='Search here...'
              onChange={(e)=> navigate(`/search?q=${e.target.value}`)}
              value={query?.split("%20")?.join(" ")}
              
            />
            <button><FontAwesomeIcon icon={faSearch}/></button>
            </div>
      <SideNav/>
      {/* {
                data.map((searchData,index)=>{ return(
      <M_movies data={searchData} key={searchData.id+"search"} heading={""} media_type={searchData.media_type} />
    )
  })
} */}
    </div>
  )
}
