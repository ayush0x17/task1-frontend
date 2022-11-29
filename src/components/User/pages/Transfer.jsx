import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import axios from '../../../api/axiosClient';

function Transfer() {
  const [amount, setAmount] = useState(0);
  const [account, setAccount] = useState("");

  const transferAmount = async(amount,toAccount) => {
    const id = toast.loading("Sending Request",{
      position:"top-right"
    })
    const response = await axios.post('/user/transfer',{
      amount:Number(amount),
      toAccount
    })
    toast.update(id,{
        render: "Money Transferred",
        type: "success",
        isLoading: false,
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    })
  }
  function handleSubmit(e){
        e.preventDefault();
        transferAmount(amount,account)
    }

  return (
    <div className="container px-8 py-12 h-screen bg-gray-100 m-z">
      <ToastContainer position="top-right" reverseOrder={false} />
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md mx-auto sm:max-w-xl" onSubmit={e => {handleSubmit(e)}}>
          <div className="m-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="amount"
            >
              Amount
            </label>
            <input
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              type="number"
              id="amount"
              onChange={e => {setAmount(e.target.value)}}
              value={amount}
              placeholder="10000"
            />
          </div>
          <div className="m-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="account"
            >
              To Account
            </label>
            <input
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              id="account"
              onChange={e => {setAccount(e.target.value)}}
              value={account}
              type="text"
              placeholder='0xxxxxxxxxxxxxxx'
            />
            <div className='m-4'>
                <input type="submit" value="Transfer" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'/>
            </div>
          </div>
        </form>
    </div>
  );
};


export default Transfer