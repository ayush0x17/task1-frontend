import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useAuthStore } from '../store/authStore';

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {isAdmin,login} = useAuthStore()
    function handleSubmit(e){
        e.preventDefault();
        login(username,password)
    }
  return (
    <div className="container px-8 py-12 h-screen bg-gray-100 m-z">
      <ToastContainer position="top-right" reverseOrder={false} />
        {isAdmin === true?(
              <Navigate to="/dashboard" replace={true} />
            ):null}
            {isAdmin === false?(
              <Navigate to="/dashboard" replace={true} />
            ):null}
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md mx-auto sm:max-w-xl" onSubmit={e => {handleSubmit(e)}}>
          <div className="m-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              type="text"
              id="username"
              onChange={e => {setUsername(e.target.value)}}
              value={username}
              placeholder="admin0x17"
            />
          </div>
          <div className="m-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              id="password"
              onChange={e => {setPassword(e.target.value)}}
              value={password}
              type="password"
              placeholder='password'
            />
            <div className='m-4'>
                <input type="submit" value="login" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'/>
            </div>
          </div>
        </form>
    </div>
  )
}

export default Login