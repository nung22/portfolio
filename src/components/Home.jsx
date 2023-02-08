import React from 'react';
import { Paper } from '@mui/material';
import './Home.css'

export default function Home() {

  return (
    <div>
      <div className='flex justify-center mt-20 z-100'>
        <div className='flex flex-col gap-8 p-16 z-30' style={{borderRadius:".9rem"}} elevation={10}>
          <p className='text-xl font-semibold'>Hello, my name is</p>
          <p className='text-7xl font-bold'>Nicholas Ung.</p>
          <p className='text-6xl font-bold'>I'm a web developer.</p>
          <p className='text-2xl'>My passion lies in solving business problems through<br/>
          human-centered design. I specialize in building (and<br/>
          periodically planning) excellent digital experiences.</p>
        </div>
      </div>
      <div className="flex justify-center opacity-30 -translate-y-96 z-0">
        <div id="left-box" className="flex items-center rotate-90 rounded-full w-36 h-36 z-20 
        bg-gradient-to-r 
        from-blue-400 
        to-orange-500 
        via-purple-500
        animate-gradient-x
        "></div>
        <div id="middle-box" className="flex items-center rotate-90 rounded-full w-80 h-80 z-10
        bg-gradient-to-r 
        from-pink-500 
        to-yellow-500 
        via-green-400
        animate-gradient-x
        " style={{}}></div>
        <div id="right-box" className="flex items-center rotate-90 rounded-full w-48 h-48 mt-24 z-0
        bg-gradient-to-r 
        from-blue-400 
        to-orange-500 
        via-purple-500
        animate-gradient-x
        "></div>

      </div>
    </div>
  );
}