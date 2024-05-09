import React from 'react';
import img from '../assets/images/FeaturedImg/johnwick.jpg';
import Avesha from '../assets/images/FeaturedImg/Avesham.jpg';

import { BsStarFill, BsStarHalf } from 'react-icons/bs';

const  MovieCard = () => {
  return (
    <div className="flex flex-col  bg-black">
      <h1 className="text-3xl p-4 text-start text-yellow-500">Actions</h1>
      <div className="flex flex-wrap  gap-6">
        <div className="flex flex-col items-center w-[280px] h-[500px]  p-5 bg-black rounded-lg transition-all duration-150 hover:scale-110">
          <img src={img} alt="" className="rounded-lg w-full h-[400px] object-cover" />
          <div className="flex flex-row justify-center items-center mt-5 ">
            <h1 className="text-white">hello</h1>
            <div className="flex">
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
              <BsStarHalf className="text-yellow-500" />
            </div>
            <h1>1999</h1>
          </div>
        </div>

        <div className="flex flex-col items-center w-[280px] h-[500px]  p-5 bg-black rounded-lg transition-all duration-150 hover:scale-110">
          <img src={Avesha} alt="" className="rounded-lg w-full h-[400px] object-cover" />
          <div className="flex flex-row justify-center items-center mt-5 ">
            <h1 className="text-white">hello</h1>
            <div className="flex">
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
              <BsStarHalf className="text-yellow-500" />
            </div>
            <h1 className='text-white'>1999</h1>
          </div>
        </div>
        {/* Add more cards here */}
      </div>
    </div>
  );
}

export default MovieCard;
