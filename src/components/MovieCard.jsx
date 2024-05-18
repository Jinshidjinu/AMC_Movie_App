import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';


const MovieCard = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const moviesData = JSON.parse(localStorage.getItem('movies')) || [];
    setMovies(moviesData);
  }, []);

  return (
    <div className="flex flex-col bg-black">
      <h1 className="text-3xl p-4 text-start text-yellow-500">Movies</h1>
      <div className="flex flex-wrap gap-6 ">
        {movies.map((movie) => (
          <div
            key={movie.name}
            className="flex flex-col items-center w-[280px] h-[500px] p-5 bg-black rounded-lg transition-all ease-in-out duration-300 hover:scale-[1.05]"
          >
            <Link to={`/moviesdetails/${encodeURIComponent(movie.name)}`}>
              <img
                src={movie.image}
                alt=""
                className="rounded-lg w-full h-[400px] object-cover"
              />
            </Link>
            <div className="flex flex-col justify-center items-center mt-5">
              <h1 className="text-gray-300 font-bold font-serif">{movie.name}</h1>
            
              <h1 className="text-blue-400 text-xs">{movie.language}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieCard;