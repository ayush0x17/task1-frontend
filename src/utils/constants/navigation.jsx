import { MdOutlineDashboardCustomize, MdOutlineAdminPanelSettings } from "react-icons/md";
import { BsListCheck } from "react-icons/bs";
import { BiTransfer } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";


export const DASHBOARD_NAV_LINKS = [
    {
        key:'dashboard',
        label:'Dashboard',
        path:'/dashboard',
        icon: <MdOutlineDashboardCustomize/>
    },{
        key:'transactions',
        label:'Transactions',
        path:'/dashboard/transactions',
        icon: <BsListCheck/>
    },{
        key:'transfer',
        label:'Transfer',
        path:'/dashboard/transfer',
        icon: <BiTransfer/>
    }
]

export const ADMIN_DASHBOARD_NAV_LINKS = [
    {
        key:'admin',
        label:'Admin',
        path:'/dashboard',
        icon: <MdOutlineAdminPanelSettings/>
    },{
        key:'creditDebit',
        label:'Credit/Debit',
        path:'/dashboard/credit-debit',
        icon: <BsListCheck/>
    },{
        key:'user',
        label:'users',
        path:'/dashboard/users',
        icon: <FiUsers/>
    }
]
