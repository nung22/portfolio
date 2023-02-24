import React from 'react';
import { Link } from "react-router-dom";
import './Home.css'
import EastIcon from '@mui/icons-material/East';
import FleaFlickr from '../assets/projects/FleaFlickr.png'
import ChowCounter from '../assets/projects/ChowCounter.png'

export default function Home() {

  return (
    <div className=''>
      <div className='flex justify-center mt-8 sm:mt-16 z-50 relative top-5'>
        <div className='flex flex-col gap-3 sm:gap-6 sm:translate-x-2 z-50 pr-2' style={{width:"40rem"}}>
          <p className='text-base sm:text-xl font-semibold'>Hello, my name is</p>
          <p className='text-4xl sm:text-7xl font-bold'>Nicholas Ung.</p>
          <p className='text-2xl sm:text-5xl font-semibold'>I'm a web developer.</p>
          <p className='text-base font-light sm:text-2xl'>My passion lies in solving business problems through a
          human-centered approach. I specialize in building and occasionally
          designing digital experiences.
          </p>
        </div>
      </div>
      <div className="flex justify-center opacity-30 relative bottom-40 sm:bottom-64" style={{marginLeft:"-3rem"}}>
        <div id="left-box" className="flex items-center rotate-90 rounded-full w-28 h-20 sm:w-36 sm:h-36 z-20 -translate-x-10 sm:translate-x-0
        bg-gradient-to-r 
        from-blue-400 
        to-orange-500 
        via-purple-500
        animate-gradient-x
        "></div>
        <div id="middle-box" className="flex items-center rotate-90 rounded-full w-72 h-48 sm:w-80 sm:h-80 z-10 -translate-x-2 sm:translate-x-0
        bg-gradient-to-r 
        from-pink-500 
        to-yellow-500 
        via-green-400
        animate-gradient-x
        " style={{}}></div>
        <div id="right-box" className="flex items-center rotate-90 rounded-full w-40 h-28 sm:w-48 sm:h-48 mt-24 z-0 translate-x-4 sm:translate-x-0
        bg-gradient-to-r 
        from-blue-400 
        to-orange-500 
        via-purple-500
        animate-gradient-x
        "></div>
      </div>
      <div className='flex justify-center mt-8 sm:mt-16 z-50 relative bottom-80'>
        <div className='flex flex-col gap-3 sm:gap-10 sm:translate-x-2 z-50' style={{width:"40rem"}}>
          <Link to={"/about"} className='flex gap-2 text-2xl'>
            <p>View profile</p>
            <EastIcon style={{marginTop:"5.5px"}}/>
          </Link>
          <h2 className="font-semibold text-3xl italic">Selected Work</h2>
          <Link to={"/work"} className="flex gap-5 text-xl">
            <img className="rounded-lg hover:animate-pulse" src={FleaFlickr} width={360} alt="FleaFlickr ScreenShot"/>
            <div className='flex flex-col justify-between'>
              <h4 className='text-2xl font-semibold'>FleaFlickr</h4>
              <p>An issue tracker and project management software</p>
              <div className='flex gap-2'>
                <p className='font-semibold'>Read more</p>
                <EastIcon style={{marginTop:"5.5px"}}/>
              </div>
            </div>
          </Link>
          <Link to={"/work"} className="flex gap-5 text-xl">
            <img className="rounded-lg hover:animate-pulse" src={ChowCounter} width={360} alt="Chow Counter ScreenShot"/>
            <div className='flex flex-col justify-between'>
              <h4 className='text-2xl font-semibold'>Chow Counter</h4>
              <p>A calorie-tracking app with built-in tools to discover new restaurants and recipes</p>
              <div className='flex gap-2'>
                <p className='font-semibold'>Read more</p>
                <EastIcon style={{marginTop:"5.5px"}}/>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}