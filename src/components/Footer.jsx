import React from "react";
import { TiSocialTwitterCircular } from "react-icons/ti"
import { AiFillFacebook,AiFillInstagram,AiFillGithub,AiFillYoutube} from "react-icons/ai"
import { FaSquareYoutube } from "react-icons/fa6";
const Footer = () =>{

    return(
        <div className="bg-black py-10 sm:pt-16 lg:pt-19  h-[200px] border-t-2 border-gray-600">
            <div className="flex gap-11 justify-center h-1">
            <AiFillFacebook className="text-white rounded-3xl text-5xl  hover:text-blue-600 active:text-violet-700 focus:outline-none focus:ring focus:ring-violet-300"/>
            <AiFillInstagram className="text-white text-5xl rounded-3xl  hover:text-blue-600 active:text-violet-700 focus:outline-none focus:ring focus:ring-violet-300"/>
            <AiFillGithub className="text-white text-5xl rounded-3xl  hover:text-blue-600 active:text-violet-700 focus:outline-none focus:ring focus:ring-violet-300"/>
             <TiSocialTwitterCircular className="text-white  border-none rounded-full w-[50px] h-[50px] hover:text-blue-600 active:text-violet-700 focus:outline-none focus:ring focus:ring-violet-300"/>
             <AiFillYoutube className="text-white text-5xl rounded-3xl  hover:text-blue-600 active:text-violet-700 focus:outline-none focus:ring focus:ring-violet-300"/>
             <FaSquareYoutube className="border-zinc-50  hover:text-blue-600 active:text-violet-700 focus:outline-none focus:ring focus:ring-violet-300"/>
            </div>
            <div className="mt-20 md:mt-28 2xl:mt-32"></div>
            <div className="bg-gray-900 px-4 mx-auto lg:px-8 max-w-full h-[450px] border-t-2 border-gray-900">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-12 outline-none">
              <h1 className="text-red-700 font-bold text-xl">AMC Movie APP</h1>
              <div>
                <p className="font-semibold text-yellow-600">COMPANY</p>
                <ul className="mt-8 space-y-4 text-gray-200">
                       <li><a href="#">About Us</a></li>
                       <li><a href="#">Careers</a></li>
                       <li><a href="#">Contact</a></li>

                </ul>
              </div>

              <div>
              <p className="font-semibold text-yellow-600">SUPPORT</p>
            <ul className="mt-8 space-y-4 text-gray-200">
             <li><a href="#">Contact Support</a></li>
             <li><a href="#">Help Centre</a></li>
             <li><a href="#">Supported Device</a></li>
             {/* <li><a href="#">Activate Your Device</a></li> */}
            
                  
            </ul>
              </div>

              <div className="font-semibold text-white"> 
        
            <p className="font-semibold text-yellow-600">GET THE APPS</p>
             <ul className="mt-8 space-y-4 text-gray-200">
            <li><a href="#">ios</a></li>
            <li><a href="#">Android</a></li>
            <li><a href="#">Amazone Fire</a></li>
           </ul>
        </div>

         

            </div>
              <div className="mt-20 bg-gray-900 "> 
                 <h3 className="text-white ">© Copyright 2024 AMC Theatres</h3>
                 <h3 className="text-white">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</h3>
                 </div>
              </div>
        </div>
    )
}

export default Footer