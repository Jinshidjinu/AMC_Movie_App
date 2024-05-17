import React from 'react'
import AdminNav from '../../components/Admin/AdminNav'
import Sidebar from '../../components/Admin/Sidebar'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AddMovies = () => {
  const validation = Yup.object().shape({
    image: Yup.string().url('Invalid image URL').required('Image URL is required'),
    name: Yup.string().required('Movie Name is required'),
    description: Yup.string().required('Description is required'),
    language: Yup.string().required('Language is required')
  })

  const handleSubmit = (values) => {
    console.log('Form values :', values);
    // save form data to localStorage
    const movies = JSON.parse(localStorage.getItem('movies')) || [];
    const newMovie = {
      name: values.name,
      description: values.description,
      language: values.language,
      image: values.image, // No need to create an ObjectURL
      trailer:values.trailer
    };
    movies.push(newMovie);
    localStorage.setItem('movies', JSON.stringify(movies));
    // Optional: Add logic to make an API request to save data to a server
    alert('Movie added successfully!');
  }

  return (
    <div>
      <AdminNav />
      <div className='flex'>
        <Sidebar />
        <div className='flex items-center ml-[300px] mt-4'>
          <div className="bg-white rounded-lg shadow-md">
            <Formik
              initialValues={{
                name: '',
                description: '',
                language: '',
                image: ''
              }}
              validationSchema={validation}
              onSubmit={handleSubmit}
            >
              {({ values, setFieldValue }) => (
                <Form>
                  <div className="mb-4">
                    <h1 className="text-lg font-semibold mb-2">
                      <label className="text-gray-700">Movie Image URL:</label>
                    </h1>
                    <Field
                      type="text"
                      name="image"
                      className="border border-gray-300 rounded-md px-3 py-2 w-[600px]"
                      placeholder="Enter image URL"
                    />
                    <ErrorMessage name='image' component='div' className='text-red-500' />
                  </div>
                  <div className="mb-4">
                    <h1 className="text-lg font-semibold mb-2">
                      <label className="text-gray-700">Movie Name:</label>
                    </h1>
                    <Field
                      type="text"
                      name="name"
                      className="border border-gray-300 rounded-md px-3 py-2 w-[600px]"
                    />
                    <ErrorMessage name='name' component='div' className='text-red-500' />
                  </div>
                  <div className="mb-4">
                    <label className="text-gray-700">Description:</label>
                    <Field
                      as="textarea" // Use 'as' property to specify the type of input
                      name="description"
                      className="border border-gray-300 rounded-md px-3 py-2 w-full"
                      rows="2"
                    />
                    <ErrorMessage name="description" component="div" className="text-red-500" />
                  </div>
                  <div className="mb-4">
                    <label className="text-gray-700">Language:</label>
                    <Field
                      type="text"
                      name="language"
                      className="border border-gray-300 rounded-md px-3 py-2 w-full"
                    />
                    <ErrorMessage name='language' component='div' className='text-red-500' />
                  </div>

                  <div className="mb-4">
                    <h1 className="text-lg font-semibold mb-2">
                      <label className="text-gray-700">Movie Trailer:</label>
                    </h1>
                    <Field
                      type="text"
                      name="trailer"
                      className="border border-gray-300 rounded-md px-3 py-2 w-[600px]"
                      placeholder="Movie Trailer"
                    />
                    <ErrorMessage name='image' component='div' className='text-red-500' />
                  </div>
                  <button type="submit" className="bg-black text-white px-4 py-2 rounded-md hover:text-cyan-500">
                    Add Movie
                  </button>

               
                </Form>
              )}
            </Formik>
            <div>
                    <p className='text-white'>h</p>
                  </div>
                  <div>
                    <p className='text-white'>h</p>
                  </div>
                  <div>
                    <p className='text-white'>h</p>
                  </div>
                  <div>
                    <p className='text-white'>h</p>
                  </div>
                  <div>
                    <p className='text-white'>h</p>
                  </div>
                  <div>
                    <p className='text-white'>h</p>
                  </div>
                  <div>
                    <p className='text-white'>h</p>
                  </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default AddMovies