import React, { lazy } from 'react'
import './detailPage.css'
import SideNav from './UI/SideNav'
import Movies from './UI/Movies'
import useFetch from '../Hooks/useFetch'


export default function DetailPage() {



  return (
    <div className='detail-page'>
        <SideNav/>
        <div className="trailer">

        </div>
        <Movies/>

    </div>
  )
}
