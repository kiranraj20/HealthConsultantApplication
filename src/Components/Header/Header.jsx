import React from 'react'
import Dropdown from './Dropdown';
import './Header.css'
import { CiSearch } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { GoPlus } from "react-icons/go";





const Header = () => {
  return (
    <div className='Header'>
      <div className="text-3xl underline">
        Logo
      </div>
      <div className="search">
        <div className="search-bar">
          <div className=""><Dropdown /></div>
          <div><input className="search-bar-input" type="text" placeholder='Search' /></div>
          <div className=""><CiSearch className='search-icon' /></div>
        </div>
        <div className="add-new"><GoPlus /> Add New</div>
      </div>
      <div className="profile-bar">
        <div className=""><CiBellOn className='bell-icon' /></div>
        <div className=""><CiUser className='user-icon' /></div>
      </div>
    </div>
  )
}

export default Header