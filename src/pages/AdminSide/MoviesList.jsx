
import Sidebar from '../../components/Admin/Sidebar'
import AdminNav from '../../components/Admin/AdminNav'
import {Link, useNavigate} from 'react-router-dom'

const MoviesList = () => {
    const navigate = useNavigate();

    const handleEditClick = () =>{
        navigate('/editmovies')
    }
    
  return (
    <div>
      <div>
        <AdminNav />
        <div className='flex'>
          <Sidebar />
          <div className='p-5 w-full overflow-x-auto '>
            <table className=' table-auto border-collapse border border-gray-400 w-full '>
              <thead>
                <tr>
                  <th className='border border-gray-400 px-4 py-2 bg-yellow-800 text-white'>Image</th>
                  <th className='border border-gray-400 px-4 py-2 bg-yellow-800 text-white'>Title</th>
                  <th className='border border-gray-400 px-4 py-2 bg-yellow-800 text-white'>Description</th>
                  <th className='border border-gray-400 px-4 py-2 bg-yellow-800 text-white'>Language</th>
                  <th className='border border-gray-400 px-4 py-2 bg-yellow-800 text-white'>Edit</th>
                  <th className='border border-gray-400 px-4 py-2 bg-yellow-800 text-white'>Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr className=''>
                  <td className='border border-gray-400 px-4 py-2 '></td>
                  <td className='border border-gray-400 px-4 py-2 text-center'>Kalkki</td>
                  <td className='border border-gray-400 px-4 py-2 text-center'>Mass</td>
                  <td className='border border-gray-400 px-4 py-2 text-center'>Malayalam</td>
                  <td className='border border-gray-400 px-4 py-2 text-center'><button className='bg-green-800 w-[60px] rounded-md text-white' onClick={handleEditClick}>Edit</button></td>
                  <td className='border border-gray-400 px-4 py-2 text-center'><button className='bg-red-800 w-[50px] rounded-md text-white '>Delete</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoviesList