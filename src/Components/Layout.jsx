import React from 'react'
import "./layout.css"
import Promotion from './UI/Promotion';
import SideNav from "./UI/SideNav";
import Movies from './UI/Movies'

export default function Layout() {
  return (
    <div className='layout'>
        <Promotion/>
        <SideNav/>
        <Movies/>
    </div>
  )
}
