import React, { useEffect, useState } from 'react'
import axios from '../../../api/axiosClient'

function AdminDashboard() {
  const [amount, setAmount] = useState("");
  const [users, setUsers] = useState(0);

  const totalAmount = async () => {
    const response = await axios.get('/admin/total-amount');
    setAmount(response.data.amount)
  };

  const totalUsers = async () => {
    const response = await axios.get('/admin/total-users')
    setUsers(response.data.totalUsers)
  }
  useEffect(() => {
    totalAmount();
    totalUsers();
  }, []);

  return (
      <div className="flex items-center justify-center text-xl font-semibold tracking-wider w-auto ">
      <div className=' p-3 gap-3 flex items-center'>
        <div className='border p-5 border-neutral-100 shadow-slate-400 shadow-lg rounded-xl'>
        Total Amount: <span className='text-neutral-600'> {amount} </span>
      </div>
      <div className='border p-5 border-neutral-100 shadow-slate-400 shadow-lg rounded-xl'>
        Total users: <span className='text-neutral-600'> {users} </span>
      </div>
      </div>
    </div>
  )
}

export default AdminDashboard