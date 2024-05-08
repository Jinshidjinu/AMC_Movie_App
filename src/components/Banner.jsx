import React from "react";
import bannerImage from "../assets/images/the-sympathizer-altB-ka-2000x700.jpg"
import { FaPlay } from "react-icons/fa6";


const Banner = () => {
  return (
    <div className="flex flex-col w-full bg-cover bg-center h-80vh " style={{
      backgroundImage: `url(${bannerImage})`,
      height: "80vh",
    }}>
       
       <div className="mt-[250px] md:ml-12 ml-20">
    <div className="content p-4">
        <p className="text-white">AVAILABLE NOW</p>
        <h1 className="title text-4xl md:text-6xl font-bold text-white">The Sympathizer</h1>
    </div>
   
    <p className="description text-white md:ml-4 text-xs ">Try THE SPICY STUNTMAN and embrace the inferno at MacGuffins Bar®!</p>
    <p className="description text-white md:ml-4 text-xs ">Enjoy Patrón Silver mixed with hot jalapeño syrup and finished with sweet citrus when you see THE FALL GUY, now showing.</p>
    <div className="banner-buttons flex gap-4  p-5">
        <button className="button bg-blue-500 text-white w-32 md:w-48 h-10 p-2 flex justify-center items-center gap-2"><FaPlay/> Watch The Trailer</button>
        <button className="button bg-blue-500 w-32 md:w-48 h-10 text-white">Find Out More</button>
    </div>
</div>

    </div>
  );
}

export default Banner;


