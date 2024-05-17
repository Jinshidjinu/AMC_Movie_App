import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import { CiStar } from "react-icons/ci";

const MovieDetails = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const moviesData = JSON.parse(localStorage.getItem('movies')) || [];
    setMovies(moviesData);
  }, []);

  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <div className="bg-black w-full h-[1px]"></div>
      <div className="w-full p-10 flex flex-col md:flex-row justify-evenly items-center mt-[120px]">
        {movies.length > 0 ? (
          movies.map((movie,) => (
            <div key={movie.name} className="flex flex-col md:flex-row justify-evenly items-center">
              <div className="w-full md:w-[600px] h-[600px] mb-8 md:mb-0">
                <img
                  className="bg-cover w-full h-[600px] rounded-2xl"
                  src={movie.image}
                  alt={movie.name}
                />
              </div>
              <div className="bg-black w-full md:w-[500px] h-auto text-white flex flex-col gap-4 p-9 rounded">
                <h1 className="font-bold">{movie.name}</h1>
                <h2 className="text-gray-400">{movie.language}</h2>
                <p>{movie.description}</p>
                <div className="flex">
                  <BsStarFill className="text-yellow-500" />
                  <BsStarFill className="text-yellow-500" />
                  <BsStarFill className="text-yellow-500" />
                  <BsStarFill className="text-yellow-500" />
                  <BsStarHalf className="text-yellow-500" />
                </div>
                <button className="bg-red-700 rounded-2xl w-[140px] h-[40px] flex gap-2 justify-center items-center">
                  <FaCirclePlay className="text-md" /> Watch Movie
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
                      className="bg-gray-600 w-[200px] text-white rounded-md resize-none outline-none"
                    ></textarea>
                    <button className="bg-blue-800 w-[100px] rounded-xl">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white">No movies found.</p>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;