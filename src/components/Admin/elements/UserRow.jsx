import React from 'react'

function UserRow({user}) {
  return (
    <tr className="border-b">
        <td className="text-base font-normal text-gray-900 px-6 py-4 whitespace-nowrap">{user.firstName} {user.lastName}</td>
        <td className="text-base font-normal text-gray-900 px-6 py-4">
            {user.account.accountNumber}
        </td>
        <td className="text-base font-normal text-gray-900 px-6 py-4">
            {user.account.amount}
        </td>
    </tr>
  )
}

export default UserRow