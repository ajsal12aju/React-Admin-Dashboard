import React from 'react'
import "./sidebar.scss" 
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import BookIcon from '@mui/icons-material/Book';
import AppSettingsAltIcon from '@mui/icons-material/AppSettingsAlt';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';


function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="top">
        <span className='logo'>lamAdmin</span>  
      </div>
      <hr />
      <div className="center">
         <ul>
            <p className="title">MAIN</p>
            <li> <DashboardIcon className='icon' /><span>Dashboard</span></li>
            <p className="title">LISTS</p>
            <li> <GroupIcon  className='icon'/><span>Users</span></li>
            <li> <ProductionQuantityLimitsIcon  className='icon'/><span>Product</span></li>
            <li> <BookmarkBorderIcon  className='icon'/><span>Orders</span></li>
            <li> <LocalShippingIcon  className='icon'/><span>Delivery</span></li>
            <p className="title">USEFUL LINKS</p>
            <li> <MilitaryTechIcon  className='icon'/><span>Status</span></li>
            <li> <CircleNotificationsIcon  className='icon'/><span>Notification</span></li>
            <p className="title">SERVICES</p>
            <li> <HealthAndSafetyIcon  className='icon'/><span>System Health</span></li>
            <li> <BookIcon  className='icon'/><span>Logs</span></li>
            <li> <AppSettingsAltIcon  className='icon'/><span>Setting</span></li>
            <p className="title">USER</p>
            <li> <AccountBoxIcon  className='icon'/><span>Profile</span></li>
            <li> <LogoutIcon  className='icon'/><span>Logout</span></li>
         </ul>
      </div>
      <div className="bottom">
        <div className="colorOption">

        </div>
        <div className="colorOption">
          
        </div>
      </div>    
    </div>
  )
}

export default Sidebar
