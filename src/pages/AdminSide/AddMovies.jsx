import React from 'react'
import AdminNav from '../../components/Admin/AdminNav'
import Sidebar from '../../components/Admin/Sidebar'

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// const initialValues = {
//     movieName: '',
//     description: '',
//     image: null,
//     cast: ''
//   };
function AddMovies() {
  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      document.getElementById('preview-image').src = imageUrl;
    }
  };

  return (
    <div>
      <AdminNav />
      <div className='flex'>
        <Sidebar />
        <div className='flex items-center ml-[300px] mt-4'>
          <div className="bg-white rounded-lg shadow-md">
            <div className="mb-4">
              <label className="text-gray-700 block font-semibold mb-2"></label>
              <div className="flex items-center flex-col">
                <div className="ml-4 bg-gray-200 rounded-md flex items-center justify-center text-gray-500 h-[250px] w-72 mb-3">
                  <img id="preview-image" className="h-[200px] w-auto" src="#" alt="Preview" />
                </div>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  className="border border-gray-300 rounded-md px-3 py-2 w-[600px]"
                  onChange={handleImageChange}
                />
              </div>
            </div>
            <div className="mb-4">
              <h1 className="text-lg font-semibold mb-2">
                <label className="text-gray-700">Movie Name:</label>
              </h1>
              <input
                type="text"
                name="name"
                className="border border-gray-300 rounded-md px-3 py-2 w-[600px]"
              />
            </div>
            <div className="mb-4">
              <label className="text-gray-700">Description</label>
              <textarea
                name="description"
                className="border border-gray-300 rounded-md px-3 py-0 w-full"
                rows="2"
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="text-gray-700">Language:</label>
              <input
                type="text"
                name="language"
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
            </div>
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded-md hover:text-cyan-500"
            >
              Add Movie
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default AddMovies
