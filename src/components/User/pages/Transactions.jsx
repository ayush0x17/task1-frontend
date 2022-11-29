import React, { useEffect, useState } from 'react'
import axios from '../../../api/axiosClient';
import TransactionRow from '../elements/TransactionRow'

function Transactions() {
  const [transactions, setTransactions] = useState([]);

  const getTxns = async () => {
    const response = await axios.get('/user/get-all-txns');
    setTransactions(response.data)
  };

  useEffect(() => {
    getTxns();
  }, []);

  return (
    <div className='flex flex-col items-center h-screen justify-self-center overflow-auto gap-1'>
      <div className='text-4xl font-semibold py-4'>
        Transactions
      </div>
      <div className="flex flex-col overflow-auto w-4/5">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="border-b">
                  <tr>
                    <th scope="col" className="text-lg font-semibold text-gray-900 px-6 py-4 text-left">
                      Transaction Id
                    </th>
                    <th scope="col" className="text-lg font-semibold text-gray-900 px-6 py-4 text-left">
                      To Account
                    </th>
                    <th scope="col" className="text-lg font-semibold text-gray-900 px-6 py-4 text-left">
                      Type
                    </th>
                    <th scope="col" className="text-lg font-semibold text-gray-900 px-6 py-4 text-left">
                      Amount
                    </th>
                    <th scope="col" className="text-lg font-semibold text-gray-900 px-6 py-4 text-left">
                      Time
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction) => (
                    <TransactionRow key={transaction.id} transaction={transaction}/>
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

export default Transactions