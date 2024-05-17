
import {Link} from 'react-router-dom'
import { BiSolidImageAdd } from "react-icons/bi";
import { MdLocalMovies } from "react-icons/md";
const Sidebar = () => {
  return (
    <div>
        <div className="w-[250px] h-full bg-black  border border-black ">
          <div className='w-full h-[80px] bg-red-900 mt-6 border-solid border-black flex items-center justify-center text-white'>
              <Link to="/addproduct">
              <div className="flex ">
                <BiSolidImageAdd className="text-2xl" />
                <span className="ml-2">Add Movies</span>
              </div>
              </Link>

          </div>

         <div className='w-full h-[80px] bg-yellow-700 border border-black flex items-center justify-center text-white'>
            <Link to="/movieslist">
            <div className="flex ">
              <MdLocalMovies className="text-2xl" />
              <span className="ml-2"> Movies List</span>
            </div>
            </Link>

         </div>

      </div>
    </div>
  );
};


export default Sidebar;
