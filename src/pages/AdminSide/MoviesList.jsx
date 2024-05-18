
import Sidebar from '../../components/Admin/Sidebar'
import AdminNav from '../../components/Admin/AdminNav'
import {Link, useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react';
import  YouTube  from 'react-youtube';
const MoviesList = () => {
    const navigate = useNavigate();
    const [movies , setMovies] = useState([]);

    useEffect(()=>{
        // Fetch movies from localStorage when the component mounts

        const storedMovies = localStorage.getItem('movies')
       
        if (storedMovies) {
          setMovies(JSON.parse(storedMovies));
          
        }

    },[])

    const handleEditClick = (movieId) =>{
        // Navigate to the edit page with the selected movie ID
        navigate(`/editmovies/${movieId}`);

    };

  
    const getYouTubeId = (url) => {
      const regExp =
        /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|v=)([^#?]*).*/;
      const match = url.match(regExp);
      return match && match[2].length === 11 ? match[2] : null;
    };


    

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
                  <th className='border border-gray-400 px-4 py-2 bg-yellow-800 text-white'>Trailer</th>
                  <th className='border border-gray-400 px-4 py-2 bg-yellow-800 text-white'>Edit</th>
                  <th className='border border-gray-400 px-4 py-2 bg-yellow-800 text-white'>Delete</th>
                </tr>
              </thead>
              <tbody>

                {movies.map((movies,index)=>(

                <tr key={index}>
                  <td className='border border-gray-400 px-4 py-2 '><img src={movies.image} alt="" className='w-full h-[120px]' /></td>
                  <td className='border border-gray-400 px-4 py-2 text-center'>{movies.name}</td>
                  <td className='border border-gray-400 px-4 py-2 text-center'>{movies.description}</td>
                  <td className='border border-gray-400 px-4 py-2 text-center'>{movies.language}</td>
                  <td className='border border-gray-400 px-4 py-2 text-center'>
                  <YouTube
                    videoId={getYouTubeId(movies.trailer)}
                    opts={{
                      height: "150",
                      width: "200",
                      playerVars: { mute: 0, autoplay:0},
                     
                    }}  
    />
                    </td>
                  <td className='border border-gray-400 px-4 py-2 text-center'><button className='bg-green-800 w-[60px] rounded-md text-white' onClick={handleEditClick}>Edit</button></td>
                  <td className='border border-gray-400 px-4 py-2 text-center'><button className='bg-red-800 w-[50px] rounded-md text-white '>Delete</button></td>
                </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoviesList