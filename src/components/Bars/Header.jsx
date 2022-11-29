import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate();

  return (
    <div className='bg-white h-16 p-4 flex justify-between items-center border-b border-gray-200'>
      <div></div>
      <div className='flex items-center gap-2 mr-2'>
        <Menu>
          <MenuButton>
            <CgProfile fontSize={38}/>
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => navigate('/profile')}>Profile</MenuItem>
            <MenuItem onClick={() => navigate('/settings')}>Settings</MenuItem>
            <MenuItem onClick={() => navigate('/logout')}>Sign Out</MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
  )
}

export default Header