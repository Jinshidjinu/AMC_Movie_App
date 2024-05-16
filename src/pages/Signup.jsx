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

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear error message when input changes
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    const validationErrors = {};
    if (!formData.name) {
      validationErrors.name = 'Name is required';
    }
    if (!formData.email) {
      validationErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      validationErrors.email = 'Invalid email address';
    }
    if (!formData.phone) {
      validationErrors.phone = 'Phone number is required';
    }
    if (!formData.password) {
      validationErrors.password = 'Password is required';
    } else if (formData.password.length < 5) {
      validationErrors.password = 'Password must be at least 5 characters';
    }
    if (formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = 'Passwords do not match';
    }

    // If there are validation errors, set them and prevent form submission
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // If validation passes, proceed with form submission
    const newUser = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
      confirmPassword: formData.confirmPassword
    };

    // Retrieve existing users' data from localStorage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Add new user data to the existing list
    const updatedUsers = [...existingUsers, newUser];

    // Store updated users' data back to localStorage
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    // Handle saving user data or other submission logic here
    console.log('Users data saved to localstorage:', newUser);

    // Reset form data after successful submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: ''
    });

    setErrors({});
  };

  return (
    <div>
      <section className='background bg-gray-300 min-h-screen items-center justify-center p-10'>
        <div className='bg-gray-200 flex flex-col md:flex-row items-center rounded-2xl shadow-lg max-w-3xl p-5 md:ml-auto md:mr-auto mt-12'>
          <div className='md:w-1/2 p-5'>
            <h2 className='font-bold text-2xl text-red-900 mb-8'>Sign Up</h2>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
              <input
                className='p-2 rounded-xl border'
                type='text'
                name='name'
                placeholder='Name'
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <div className='text-red-600'>{errors.name}</div>}

              <input
                className='p-2 rounded-xl border'
                type='text'
                name='email'
                placeholder='Email'
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <div className='text-red-600'>{errors.email}</div>}

              <input
                className='p-2 rounded-xl border'
                type='text'
                name='phone'
                placeholder='Phone'
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <div className='text-red-600'>{errors.phone}</div>}

              <div className='relative'>
                <input
                  className='p-2 rounded-xl border w-full'
                  type='password'
                  name='password'
                  placeholder='Password'
                  value={formData.password}
                  onChange={handleChange}
                />
                <IoEyeOutline className='absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400' />
                {errors.password && <div className='text-red-600'>{errors.password}</div>}
              </div>

              <input
                className='p-2 rounded-xl border w-full'
                type='password'
                name='confirmPassword'
                placeholder='Confirm Password'
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && <div className='text-red-600'>{errors.confirmPassword}</div>}

              <button
                type='submit'
                className='bg-red-900 rounded-xl text-white py-2 hover:scale-110 duration-300 mt-4'
              >
                Sign Up
              </button>
            </form>
            <div className='flex justify-center mt-4'>
              <p className='text-sm text-gray-600'>Already have an account? </p>
              <Link to='/' className='underline text-blue-700 ml-1'>
                Login
              </Link>
            </div>
          </div>

          <div className='md:w-1/2 p-5 hidden md:block'>
            <img className='rounded-xl' src={LogImg} alt='image' />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
