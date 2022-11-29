import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Bars/Sidebar'
import Header from './Bars/Header'

function Layout({links}) {
  return (
    <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden'>
      <Sidebar links={links}/>
      <div className='flex-1'>
        <Header/>
        <div className='p-4'>{<Outlet/>}</div>
      </div>
    </div>
  )
}

export default Layout