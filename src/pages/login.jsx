import React from 'react'
import LogImg from '../assets/images/loginIMG/pexels-pavel-danilyuk-7234304.jpg'
import { FcGoogle } from "react-icons/fc";
import { IoEyeOutline } from "react-icons/io5";
import {Link} from "react-router-dom"
import { useForm } from 'react-hook-form';
const Login = () => {

const {register, handleSubmit,setError,formState : {errors}} = useForm();
const onSubmit = (data) => {
  const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
  const user = existingUsers.find((user) => user.email === data.email);

  if (user && user.password === data.password) {
    console.log('User found:', user);

    if (user.role && user.role === 'Admin') {
      console.log('Admin logged in');
      window.location.href = '/adminhome'; // Redirect to admin dashboard
    } else {
      console.log('Regular user logged in');
      window.location.href = '/home';     // Redirect to regular userhome
    }
    
  } else {
    console.log('Invalid credentials');
    setError('password', { type: 'manual', message: 'Invalid email or password. Please try again.' });
  }
};

  return (
    <div>
        <section className='background  bg-gray-300 min-h-screen items-center justify-center p-10 '>
            <div className='bg-gray-200 flex items-center rounded-2xl shadow-lg max-w-3xl p-5 md:ml-[370px] mt-12'>
               <div className='md:w-1/2 px-16'>
                <h2 className='font-bold text-2xl text-red-900'> Login</h2>
                <p className='text-sm mt-4'>If you already a member, easily log in</p>

                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3'>
                  <input 
                  className='p-2 mt-8 rounded-xl border'
                   type="text" 
                   name='email' 
                   placeholder='Email'
                   {...register('email', {required:'Email is required '})}
                   />
                   {errors.email && <p className='text-red-600 mt-1'>{errors.email.message}</p>}

                  <div className='relative'>
                  <input 
                  className='p-2 mt-8 rounded-xl border w-full' 
                  type="password" 
                  name='password' 
                  placeholder='password'
                  {...register('password',{required:'Password is required'})}
                  
                  />
                  <IoEyeOutline className='absolute top-1/2 right-3 transulate-y-1/2 text-gray-400  mt-2'/>
                  </div>
                {errors.password && <p className='text-red-600 mt-1 '>{errors.password.message}</p>}
                  <button className='bg-red-900 rounded-xl text-white py-2 hover:scale-110 duration-300 mt-2'>Login</button>
                
                </form>

                <div className='mt-10 grid grid-cols-3 items-center'>
               <hr className='border-gray-500' />
                <p className='text-center text-sm'>OR</p>
               <hr className='border-gray-500' />
             </div>
            
             <button className='bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center gap-2 text-sm  hover:scale-110 duration-300'><FcGoogle className='text-xl '/> Login With Google </button>

             <p className='mt-5 text-xs border-b border-gray-400 py-6 text-blue-600'>Forgot your password?</p>

             <div className=' mt-3 text-xs flex justify-between items-center'>
              <p> don't have an account..</p>
              <Link to="/signup">
              <button className='py-2 px-5 bg-white border rounded-xl  hover:scale-105 duration-300'>Register</button>
              </Link>
             </div>
               </div>

            <div className='sm:block hidden w-1/2 p-5 '>
                <img className=' rounded-2xl' src={LogImg} alt="image" />
            </div>
            </div>
        </section>
    </div>
  )
}

export default Login