import React from 'react'

function TransactionRow({transaction}) {
  return (
    <tr className="border-b">
        <td className="text-base font-normal text-gray-900 px-6 py-4 whitespace-nowrap">{transaction.transactionId}</td>
        <td className="text-base font-normal text-gray-900 px-6 py-4">
            {transaction.toAccount?transaction.toAccount:"Self"}
        </td>
        <td className="text-base font-normal text-gray-900 px-6 py-4">
            {transaction.type}
        </td>
        <td className="text-base font-normal text-gray-900 px-6 py-4">
            {transaction.amount}
        </td>
        <td className="text-base font-normal text-gray-900 px-6 py-4">
            {transaction.createdAt}
        </td>
    </tr>
  )
}

export default TransactionRow