import React from "react";
import kgf from '../assets/images/FeaturedImg/kgf.jpg'
import Avesham from '../assets/images/FeaturedImg/Avesham.jpg'
import maheshinte from '../assets/images/FeaturedImg/maheshinte.jpg'
import Kantara from '../assets/images/FeaturedImg/Kantara.jpg'
import JohnWick from '../assets/images/FeaturedImg/johnwick.jpg'
import Shaithan from '../assets/images/FeaturedImg/Shaithaan.jpg'
import From from '../assets/images/FeaturedImg/from.jpg'
import theIdeaOfYou from '../assets/images/FeaturedImg/the idea of you.jpg'
import After from '../assets/images/FeaturedImg/After.jpg'
import Hachiko from '../assets/images/FeaturedImg/Hachiko.jpg'
import Leo from '../assets/images/FeaturedImg/Leo.jpg'
import Kumbalangi from '../assets/images/FeaturedImg/Kumbalangi.jpg'


const Rowpost =() =>{

    return(
    
      <div className="bg-black">
        <div>
            <h1 className="text-[25px] font-sans  text-yellow-500 ml-4 font-bold ">Feautured Today</h1>
        </div>
        <div className="flex p-5 gap-4 overflow-x-scroll overflow-y-hidden scrollbar-hidden" >
        <img src={theIdeaOfYou} alt="" className="w-[200px] h-[320px] rounded" />
        <img src={kgf} alt="" className="w-[200px] h-[320px] rounded" />
        <img src={Avesham} alt="" className="w-[200px] h-[320px] rounded" />
        <img src={Shaithan} alt="" className="w-[200px] h-[320px] rounded" />
        <img src={maheshinte} alt="" className="w-[200px] h-[320px] rounded" />
        <img src={Kantara} alt="" className="w-[200px] h-[320px] rounded" />
        <img src={JohnWick} alt="" className="w-[200px] h-[320px] rounded" />
        <img src={From} alt="" className="w-[200px] h-[320px] rounded" />
        <img src={After} alt="" className="w-[200px] h-[320px] rounded" />
        <img src={Hachiko} alt="" className="w-[200px] h-[320px] rounded" />
        <img src={Leo} alt="" className="w-[200px] h-[320px] rounded" />
        <img src={Kumbalangi} alt="" className="w-[200px] h-[320px] rounded" />
        </div>

      </div>

    )

}

export default Rowpost
