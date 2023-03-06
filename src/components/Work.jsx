import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import EastIcon from '@mui/icons-material/East';
import FleaFlickr from '../assets/projects/FleaFlickr.webp'
import ChowCounter from '../assets/projects/ChowCounter.webp'

export default function Work(props) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, "1000");
  }, []);
  
  return (
    <div className='flex justify-center mt-8 mb-12'>
    {!loaded &&
      <div className="flex justify-center items-center absolute w-11/12 h-full sm:h-5/6 z-10" style={{backgroundColor: props.colorTheme === 'dark' ? "#121212" : "#ffffff"}}>
        <Box sx={{ display: 'flex' }} className='pb-96'>
          <CircularProgress />
        </Box>
      </div>
    }
      <div className='flex flex-col gap-3 sm:gap-8 sm:translate-x-2' style={{width:"42rem"}}>
        <h2 className="font-semibold text-3xl sm:text-5xl mb-5">Work</h2>
        <h3 className='text-lg sm:text-2xl'>A selection of recent and past projects</h3>
        <a href={"https://github.com/nung22/fleaflickr"} className="flex flex-col sm:flex-row gap-5 text-xl"
        target="_blank"  rel="noopener noreferrer">
          <img className="rounded-lg hover:animate-pulse" src={FleaFlickr} width={360} height={360} alt="FleaFlickr ScreenShot"/>
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
          <img className="rounded-lg hover:animate-pulse" src={ChowCounter} width={360} height={360} alt="Chow Counter ScreenShot"/>
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
  );
}