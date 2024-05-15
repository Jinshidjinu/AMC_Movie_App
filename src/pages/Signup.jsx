import { useState } from 'react';
import { IoEyeOutline } from 'react-icons/io5';
import LogImg from '../assets/images/loginIMG/pexels-pavel-danilyuk-7234304.jpg';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve existing users' data from localStorage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Add new user data to the existing list
    const newUser = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
      confirmPassword: formData.confirmPassword
    };

    const updatedUsers = [...existingUsers, newUser];

    // Store updated users' data back to localStorage
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    // Reset form data after successful submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: ''
    });

    console.log('User data saved to localStorage:', newUser);
  };

  return (
    <div>
      <section className='background bg-gray-300 min-h-screen items-center justify-center p-10 '>
        <div className='bg-gray-200 flex items-center rounded-2xl shadow-lg max-w-3xl p-5 md:ml-[370px] mt-12'>
          <div className='md:w-1/2 px-16'>
            <h2 className='font-bold text-2xl text-red-900'> Sign Up</h2>
            <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
              <input
                className='p-2 mt-8 rounded-xl border'
                type='text'
                name='name'
                placeholder='Name'
                value={formData.name}
                onChange={handleChange}
              />
              <input
                className='p-2 mt-8 rounded-xl border'
                type='text'
                name='email'
                placeholder='Email'
                value={formData.email}
                onChange={handleChange}
              />
              <input
                className='p-2 mt-8 rounded-xl border'
                type='number'
                name='phone'
                placeholder='Phone'
                value={formData.phone}
                onChange={handleChange}
              />
              <div className='relative'>
                <input
                  className='p-2 mt-8 rounded-xl border w-full'
                  type='password'
                  name='password'
                  placeholder='Password'
                  value={formData.password}
                  onChange={handleChange}
                />
                <IoEyeOutline className='absolute top-1/2 right-3 translate-y-1/2 text-gray-400 mt-2' />
              </div>
              <input
                className='p-2 mt-8 rounded-xl border w-full'
                type='password'
                name='confirmPassword'
                placeholder='Confirm Password'
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <button
                type='submit'
                className='bg-red-900 rounded-xl text-white py-2 hover:scale-110 duration-300 mt-4'
              >
                Sign Up
              </button>
            </form>
            <div className='flex gap-4 mt-4'>
              <p className=''>Already have an account?</p>
              <Link to='/'>
                <p className='underline text-blue-700'>Login</p>
              </Link>
            </div>
          </div>

          <div className='sm:block hidden w-1/2 p-5 '>
            <img className='rounded-2xl' src={LogImg} alt='image' />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
