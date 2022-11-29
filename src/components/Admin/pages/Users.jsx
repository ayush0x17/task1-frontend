import React, { useEffect, useState } from 'react'
import axios from '../../../api/axiosClient';
import UserRow from '../elements/UserRow';

function Users() {
  const [users, setUsers] = useState([]);

   const getUsers = async () => {
    const response = await axios.get('/admin/users')
    setUsers(response.data)
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className='flex flex-col items-center h-screen justify-self-center overflow-auto gap-1'>
      <div className='flex items-center justify-between w-2/4'>
        <div className='text-4xl font-semibold py-4 flex-1'>
          Users
        </div>
        <div className='p-4 flex-2'>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Add User
            </button>
        </div>
      </div>
      <div className="flex flex-col overflow-auto w-4/5">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="border-b">
                  <tr>
                    <th scope="col" className="text-lg font-semibold text-gray-900 px-6 py-4 text-left">
                      Name
                    </th>
                    <th scope="col" className="text-lg font-semibold text-gray-900 px-6 py-4 text-left">
                      Account Number
                    </th>
                    <th scope="col" className="text-lg font-semibold text-gray-900 px-6 py-4 text-left">
                      Balance
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user,index) => (
                    <UserRow key={index} user={user}/>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Users