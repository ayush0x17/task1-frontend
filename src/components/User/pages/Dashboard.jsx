import React, { useEffect, useState } from 'react'
import axios from '../../../api/axiosClient';

function Dashboard() {
  const [balance, setBalance] = useState("");
  const [accountNumber, setAccountNumber] = useState("");

  const accountInfo = async () => {
    const response = await axios.get('/user/account-info');
    setBalance(response.data.amount)
    setAccountNumber(response.data.accountNumber)
  };

  useEffect(() => {
    accountInfo();
  }, []);

  return (
      <div className="flex items-center justify-center text-xl font-semibold tracking-wider w-auto ">
      <div className=' p-3 gap-3 flex items-center'>
        <div className='border p-5 border-neutral-100 shadow-slate-400 shadow-lg rounded-xl'>
        Total Balance: <span className='text-neutral-600'> {balance} </span>
      </div>
      <div className='border p-5 border-neutral-100 shadow-slate-400 shadow-lg rounded-xl'>
        Account Number: <span className='text-neutral-600'> {accountNumber} </span>
      </div>
      </div>
    </div>
  )
}

export default Dashboard