import React from 'react'
import {FcLibrary} from 'react-icons/fc'
import {HiOutlineLogout} from 'react-icons/hi'
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import SidebarLinks from '../SidebarLinks';

function Sidebar({links}) {
  const {logout} = useAuthStore();
  const navigate = useNavigate();
  function handleLogOut(e){
    e.preventDefault();
    navigate('/logout');
    logout();
  }
  return (
    <div className='flex flex-col bg-neutral-900 p-3 w-60 text-white'>
        <div className='flex items-center py-3 px-1 gap-2'>
            <FcLibrary size='2rem' fontSize={24}/>
            <span className='text-neutral-100 text-lg'> MyBank </span>
        </div>
        <div className='flex-1 py-8 flex flex-col gap-0.5'>
          {links.map((link) => (
            <SidebarLinks key={link.key} link={link}/>
          ))}
        </div>
        <div className='gap-0.5 pt-2 border-t border-neutral-700'>
          <div className='text-red-500 cursor-pointer flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base' onClick={e => handleLogOut(e)}>
            <span className='text-xl'><HiOutlineLogout/></span>
            Logout
          </div>
        </div>
    </div>
  )
}

export default Sidebar