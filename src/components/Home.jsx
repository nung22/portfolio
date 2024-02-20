import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import './Home.css'
import EastIcon from '@mui/icons-material/East';
import FleaFlickr from '../assets/projects/FleaFlickr.webp'
import ChowCounter from '../assets/projects/ChowCounter.webp'
import ILS from '../assets/projects/ILS.webp'
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Home(props) {
  const matches = useMediaQuery('(min-width:640px)');
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, "1000");
  }, []);

  return (
    <div className='mb-12'>
    {!loaded &&
      <div className="flex justify-center items-center absolute z-40 w-11/12 h-screen sm:h-5/6" style={{height:'70rem', backgroundColor: props.colorTheme === 'dark' ? "#121212" : "#ffffff"}}>
        <Box sx={{ display: 'flex' }} className='pb-96'>
          <CircularProgress />
        </Box>
      </div>
    }
      <div className='flex flex-col items-center'>
        <div className='flex justify-center mt-8 sm:mt-16 z-30 relative top-5 sm:mx-0 mr-8'>
          {matches ?
            <div className='flex flex-col gap-6 translate-x-2 z-30 pr-2' style={{width:"40rem"}}>
              <p className='text-xl font-semibold'>Hello, my name is</p>
              <p className='text-7xl font-bold'>Nicholas Ung.</p>
              <p className='text-5xl font-semibold'>I build things for the web.</p>
              <p className='font-light text-2xl'>My passion lies in solving business problems through a
              human-centered approach. I specialize in developing and occasionally
              designing digital experiences.
              </p>
            </div> :
            <div className='flex flex-col gap-3 z-30 translate-x-7' style={{maxWidth:"360px"}}>
              <p className='text-base font-semibold'>Hello, my name is</p>
              <p className='text-4xl font-bold'>Nicholas Ung.</p>
              <p className='text-2xl font-semibold'>I build things for the web.</p>
              <p className='text-base font-light'>My passion lies in solving business problems through a
              human-centered approach. I specialize in developing and occasionally
              designing digital experiences.
              </p>
            </div>
          }
        </div>
        <div className='flex justify-center mt-12 sm:mt-16 z-30'>
          <div className='flex flex-col gap-3 sm:gap-10 sm:translate-x-6 z-50 sm:w-fit w-10/12'>
            <Link to={"/about"} className='flex gap-px sm:gap-2 text-lg sm:text-2xl'>
              <p>View profile</p>
              <EastIcon style={{marginTop:"5.5px"}} className="pb-1 sm:pb-0"/>
            </Link>
            <h2 className="font-bold text-xl sm:text-3xl">Selected Work</h2>
            <a href={"https://www.infinitelifestylesolutions.org/"} className="flex flex-col sm:flex-row gap-5 text-xl"
            target="_blank"  rel="noopener noreferrer">
              <img className="rounded-lg hover:animate-none" src={ILS} width={360} height={360} alt="Infinite Lifestyle Solutions ScreenShot"/>
              <div className='flex flex-col justify-between sm:w-72'>
                <h4 className='text-lg sm:text-2xl font-semibold'>Infinite Lifestyle Solutions</h4>
                <p className='text-sm sm:text-base my-3 sm:my-0'>An organization for transforming lives affected by violence through restorative practices and art therapy</p>
                <div className='flex gap-1 sm:gap-2 items-center'>
                  <p className='text-sm sm:text-base font-semibold'>Read more</p>
                  <EastIcon style={{marginTop:"5.5px"}} className="pb-1 sm:pb-0"/>
                </div>
              </div>
            </a>
            <a href={"https://github.com/nung22/fleaflickr"} className="flex flex-col sm:flex-row gap-5 text-xl"
            target="_blank"  rel="noopener noreferrer">
              <img className="rounded-lg hover:animate-none" src={FleaFlickr} width={360} height={360} alt="FleaFlickr ScreenShot"/>
              <div className='flex flex-col justify-between sm:w-72'>
                <h4 className='text-lg sm:text-2xl font-semibold'>FleaFlickr</h4>
                <p className='text-sm sm:text-base my-3 sm:my-0'>An issue tracker and project management software</p>
                <div className='flex gap-1 sm:gap-2 items-center'>
                  <p className='text-sm sm:text-base font-semibold'>Read more</p>
                  <EastIcon style={{marginTop:"5.5px"}} className="pb-1 sm:pb-0"/>
                </div>
              </div>
            </a>
            <a href={"https://github.com/nung22/chow-counter"} className="flex flex-col sm:flex-row gap-5 text-xl"
            target="_blank"  rel="noopener noreferrer">
              <img className="rounded-lg hover:animate-none" src={ChowCounter} width={360} height={360} alt="Chow Counter ScreenShot"/>
              <div className='flex flex-col justify-between sm:w-72'>
                <h4 className='text-lg sm:text-2xl font-semibold'>Chow Counter</h4>
                <p className='text-sm sm:text-base my-3 sm:my-0'>A calorie-tracking app with built-in tools to discover new restaurants and recipes</p>
                <div className='flex gap-1 sm:gap-2 items-center'>
                  <p className='text-sm sm:text-base font-semibold'>Read more</p>
                  <EastIcon style={{marginTop:"5.5px"}} className="pb-1 sm:pb-0"/>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      {matches ?
        <div className="flex justify-center opacity-30 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{marginLeft:"-2.5rem", width:"40rem", top:'28rem'}}>
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
        </div> :
        <div className="flex justify-center opacity-30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{marginTop:"16.5rem", width:"360px",  top:'2rem'}}>
          <div id="left-box" className="flex items-center rotate-90 rounded-full w-24 h-24 z-20 -translate-x-3
          bg-gradient-to-r 
          from-blue-400 
          to-orange-500 
          via-purple-500
          animate-gradient-x
          "></div>
          <div id="middle-box" className="flex items-center rotate-90 rounded-full w-40 h-40 z-10
          bg-gradient-to-r 
          from-pink-500 
          to-yellow-500 
          via-green-400
          animate-gradient-x
          " style={{}}></div>
          <div id="right-box" className="flex items-center rotate-90 rounded-full w-24 h-24 mt-24 z-0 translate-x-5
          bg-gradient-to-r 
          from-blue-400 
          to-orange-500 
          via-purple-500
          animate-gradient-x
          "></div>
        </div>
      }
    </div>
  );
}