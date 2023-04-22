import React from 'react'
import Logo from '../assets/DCISM_LOGO.png'
import { FiBell,FiLogOut } from "react-icons/fi"
import { FaPlus } from "react-icons/fa"
import { Link } from "react-router-dom"
import Badge from '@mui/material/Badge';
import UserProfile from './UserProfile';

function AdminNavbar() {
    return (
      <div className='navbar'>
          <div className='top-navbar'>
              <div className='logo'> 
                <img src={Logo}></img>
              </div>
              <ul>
                <Badge badgeContent={3} color="primary">
                  <FiBell />
                </Badge>
                  <UserProfile />
                  <li><a href='/'><FiLogOut /></a></li>
              </ul>
          </div>
          <div className='side-navbar'>  
              <ul className='side-navbar-menu'>
                  <li><Link to="/admin_dashboard" className='side-navbar-link'>Dashboard</Link></li>
                  <li><Link to="/admin_appointments" className='side-navbar-link'>Appointments</Link></li>
                  <li><Link to="/admin_students" className='side-navbar-link'>Students</Link></li>  
                  <li><Link to="/admin_faculty" className='side-navbar-link'>Faculty</Link></li>       
              </ul>            
          </div>
      </div>  
    )
  }
  
  export default AdminNavbar
  