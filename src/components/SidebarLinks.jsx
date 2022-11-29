import React from 'react'
import { Link, useLocation } from 'react-router-dom'


const linkClasses = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

function SidebarLinks({link}) {

  const {pathname} = useLocation();

  return (
    <Link to={link.path} className={pathname===link.path?`text-white bg-neutral-700 ${linkClasses}`:`text-neutral-400 ${linkClasses}`}>
      <span className='text-xl'>{link.icon}</span>
      {link.label}  
    </Link>
  )
}

export default SidebarLinks