import React, { useState } from 'react'
import netflix from '../../assets/Netflix.svg'
import { FaSearch } from 'react-icons/fa'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

const AdminNav = () => {
  return (
    <div className='navbar bg-black min-h-[45px] max-w-[1600px] md:mx-auto flex justify-between items-center fixed top-0 left-0 right-0 z-50'>
      <img src={netflix} alt="logo" />
      <div className='flex bg-black items-center'>
        <input
          type="text"
          className='rounded-l-md w-[260px] h-7 text-gray-400 p-4 outline-none'
          placeholder="Search for Movies"
        />
        <button className='bg-yellow-400 h-8 w-[30px] rounded-r-md flex justify-center items-center'>
          <FaSearch className='text-black'/>
        </button>
      </div>
      <div className='text-white flex flex-col text-xs'>
        <AccountCircleIcon className='text-white'/>
        SignIn
      </div>
    </div>
  )
}

export default AdminNav