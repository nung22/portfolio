import React from 'react';
import { Paper } from '@mui/material';
import './Home.css'

export default function Home() {

  return (
    <div className=''>
      <div className='flex justify-center mt-8 sm:mt-16 z-50 relative top-5'>
        <div className='flex flex-col gap-3 sm:gap-6 sm:translate-x-2 z-50' style={{width:"36rem"}}>
          <p className='text-base sm:text-xl font-semibold'>Hello, my name is</p>
          <p className='text-4xl sm:text-7xl font-bold'>Nicholas Ung.</p>
          <p className='text-2xl sm:text-5xl font-semibold'>I'm a web developer.</p>
          <p className='text-base font-light sm:text-2xl'>My passion lies in solving business problems through
          human-centered approach. I specialize in building and occasionally
          designing digital experiences.</p>
        </div>
      </div>
      <div className="flex justify-center opacity-30 relative bottom-40 sm:bottom-64">
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
      <div className='relative bottom-56' >

        <h2 className="font-semibold text-4xl text-center italic" >Selected Work</h2>
        {/* <div>
          <a href=""><img src="" alt="" /></a>
        </div>
        <div>

        </div> */}
      </div>
    </div>
  );
}