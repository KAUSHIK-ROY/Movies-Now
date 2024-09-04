import React from 'react'
import "./layout.css"
import Promotion from './UI/Promotion';
import SideNav from "./UI/SideNav";

export default function Layout() {
  return (
    <div className='layout'>
        <Promotion/>
        <SideNav/>
        
    </div>
  )
}
