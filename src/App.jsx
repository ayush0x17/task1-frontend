import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdminDashboard from './components/Admin/pages/AdminDashboard'
import Users from './components/Admin/pages/Users'
import CreditDebit from './components/Admin/pages/CreditDebit'
import Layout from './components/Layout'
import Dashboard from './components/User/pages/Dashboard'
import Transactions from './components/User/pages/Transactions'
import Transfer from './components/User/pages/Transfer'
import { ADMIN_DASHBOARD_NAV_LINKS, DASHBOARD_NAV_LINKS } from './utils/constants/navigation'
import Login from './components/Login'
import { useAuthStore } from './store/authStore'
import NotFound from './components/NotFound'
import Logout from './components/Logout'

export default function App() {
    const {isAdmin} = useAuthStore()
  return (
    <Router>
      <Routes>
        {isAdmin===true?<Route path='/dashboard' element={<Layout links={isAdmin?ADMIN_DASHBOARD_NAV_LINKS:DASHBOARD_NAV_LINKS}/>} >
          <Route index element={<AdminDashboard/>}/>
          <Route path='users' element={<Users/>}/>
          <Route path='credit-debit' element={<CreditDebit/>}/>
        </Route>:null}
        {isAdmin===false?<Route path='/dashboard' element={<Layout links={isAdmin?ADMIN_DASHBOARD_NAV_LINKS:DASHBOARD_NAV_LINKS}/>}>
          <Route index element={<Dashboard/>}/>
          <Route path='transactions' element={<Transactions/>}/>
          <Route path='transfer' element={<Transfer/>}/>
        </Route>:null}
        <Route path='/' element={<Login/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </Router>
  )
}