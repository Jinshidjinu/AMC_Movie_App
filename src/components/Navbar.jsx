import React, { useState } from 'react'
import netflix from '../assets/Netflix.svg'
import stubs from '../assets/stubs.svg'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import {FaSearch} from 'react-icons/fa'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
 


const Navbar = () => {
  const [nav,setNav]=useState(false)
  const handleNav = () =>{
    setNav(!nav)
  }
  return (
    <div className='navbar bg-black min-h-[45px] max-w[1600px]  md:mx-auto flex justify-between items-center'>
     
       <img src={netflix} alt="logo" />
    <div className='flex bg-black items-center'>
       
       <input  type="text" className=' rounded-l-md  w-[260px] h-9 text-gray-400 ' placeholder="Search for Movies" />
       <button className='bg-yellow-400 h-9 w-[30px] rounded-r-md flex justify-center items-center'>
         <FaSearch className='text-black'/>
        </button>
    </div>
      
      <ul className='hidden md:flex'>
        <li className='p-5'><a href="" className='text-white'>MyTicket&Rewards</a></li>
        <li className='p-5'><a href="" className='text-white'>See a Movie</a></li>
        <li className='p-5'><a href="" className='text-white'>Find a Theatre</a></li>
     

      </ul>
       <div className='text-white flex flex-col text-xs'>
       <AccountCircleIcon className='text-white'/>
         SignIn
       </div>

       <div onClick={handleNav} className='block md:hidden mr-6 z-20'>

         {nav ? <AiOutlineClose size={20} className='text-white' /> :   <AiOutlineMenu size={20} className='text-white'/> }  
        
       </div>
       
       <div className={nav? 'z-10 fixed h-full top-[80px] w-full ease-out duration-500':'fixed top-[-100%]'}>
             <ul className='p-8 text-2xl w-full bg-black rounded-lg text-white'>
              <div className='flex gap-5'>
              <img src={stubs} alt="stubs" />
              <button className='bg-black border-2 hover:text-violet-600 active:text-violet-700 focus:outline-none focus:ring focus:ring-violet-300  rounded-2xl w-[100px] h-[37px] mt-4 font-sans '>Sign in </button>
              <button className='bg-white text-black rounded-2xl w-[100px] h-[37px] mt-4 font-serif hover:bg-blue-500 italic font-thin'>Join Now</button>
              </div>
              <li className='p-5'>MyTicket&Reward</li>
              <li className='p-5'>See a Movie</li>
              <li className='p-5'>Find a Theatre</li>
             </ul>
       </div>

    </div>
    
  )
}

export default Navbar