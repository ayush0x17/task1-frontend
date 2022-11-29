import React from 'react'
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();
  return (
    <div
      className="
        flex
        items-center
        justify-center
        w-screen
        h-screen
        bg-gradient-to-r
        from-indigo-600
        to-blue-400
      "
      >
      <div className="px-40 py-20 bg-white rounded-md shadow-xl">
        <div className="flex flex-col items-center">

          <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
             You have been logged out!...
          </h6>

          <button
            className="px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100" onClick={() => navigate('/')}>Log In</button>
        </div>
      </div>
    </div>
  )
}

export default Logout