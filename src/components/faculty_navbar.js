import React from 'react'
import Logo from '../assets/DCISM_LOGO.png'
import { FiBell,FiLogOut } from "react-icons/fi"
import { FaPlus } from "react-icons/fa"
import { Link } from "react-router-dom"
import Badge from '@mui/material/Badge';
import UserProfile from './UserProfile';


function FacultyNavbar() {
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
        <div className='bottom-navbar'>  
            <ul className='bottom-navbar-menu'>
                <li><Link to="/faculty_home" className='bottom-navbar-link'>Home</Link></li>
                <li><Link to="/faculty_meetings" className='bottom-navbar-link'>My Meetings</Link></li>
                <li><Link to="/faculty_schedule" className='bottom-navbar-link'>My Schedule <FaPlus /></Link></li>       
            </ul>            
        </div>
    </div>   
  )
}

export default FacultyNavbar
