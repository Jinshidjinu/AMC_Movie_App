import Navbar from "./Navbar"
import IMg from '../assets/images/FeaturedImg/johnwick.jpg'
import Aveshm from '../assets/images/FeaturedImg/Avesham.jpg'
import { FaCirclePlay } from "react-icons/fa6";
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import { CiStar } from "react-icons/ci";

const MovieDetails = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <div className="bg-black w-full h-[1px]"></div>
      <div className="w-full p-10 flex flex-col md:flex-row justify-evenly items-center mt-[120px] ">
        <div className="w-full md:w-[600px] h-[600px] mb-8 md:mb-0">
          <img className="bg-cover w-full h-[600px] rounded-2xl" src={Aveshm} alt="" />
        </div>
        <div className="bg-black w-full md:w-[500px] h-auto text-white flex flex-col gap-4 p-9 rounded">
          <h1 className="font-bold">Aavesham</h1>
          <h2 className="text-gray-400">Malayalam,English,Hindi,Kannada,Tamil</h2>
          <p>Three teenagers reach Bangalore for their engineering degree and gets involved in a fight with seniors. They find a local gangster named Ranga to help them take revenge.</p>
          <div className="flex">
            <BsStarFill className="text-yellow-500" />
            <BsStarFill className="text-yellow-500" />
            <BsStarFill className="text-yellow-500" />
            <BsStarFill className="text-yellow-500" />
            <BsStarHalf className="text-yellow-500" />
          </div>
          <button className="bg-red-700 rounded-2xl w-[140px] h-[40px] flex gap-2 justify-center items-center">
            <FaCirclePlay className="text-md" />
            Watch Movie
          </button>
          <div className="border border-solid border-gray-800 w-[300px] flex flex-col gap-5 p-2">
            <h1>Rate and Review</h1>
            <form action="" className="flex flex-col gap-2">
              <div className="flex">
                <CiStar className="text-gray-300" />
                <CiStar className="text-gray-300" />
                <CiStar className="text-gray-300" />
                <CiStar className="text-gray-300" />
                <CiStar className="text-gray-300" />
              </div>
              <textarea
                name=""
                id=""
                className="bg-gray-600 w-[200px] text-white rounded-md resize-none outline-none "
              ></textarea>
              <button className="bg-blue-800 w-[100px] rounded-xl ">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails